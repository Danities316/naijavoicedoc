
import { ToastActionElement, ToastProps } from "@/components/ui/toast"
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react"

type ToasterToast = ToastProps & {
  id: string
  title?: ReactNode
  description?: ReactNode
  action?: ToastActionElement
}

const ToastContext = createContext<{
  toasts: ToasterToast[]
  addToast: (toast: ToastProps) => string
  removeToast: (id: string) => void
  updateToast: (id: string, toast: ToastProps) => void
}>({
  toasts: [],
  addToast: () => "",
  removeToast: () => {},
  updateToast: () => {},
})

export function ToastProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toasts, setToasts] = useState<ToasterToast[]>([])

  const addToast = (toast: ToastProps) => {
    const id = crypto.randomUUID()
    setToasts((prevToasts) => [...prevToasts, { ...toast, id }])
    return id
  }

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  const updateToast = (id: string, toast: ToastProps) => {
    setToasts((prevToasts) =>
      prevToasts.map((t) => (t.id === id ? { ...t, ...toast } : t))
    )
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, updateToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  
  return {
    ...context,
    toast: (props: ToastProps) => context.addToast(props),
    dismiss: (id: string) => context.removeToast(id),
  }
}

export type { ToasterToast }

export const toast = {
  // Default toast
  default: (props: ToastProps) => {
    const { toast } = useToast()
    return toast(props)
  },
  // Variants
  info: (props: ToastProps) => {
    const { toast } = useToast()
    return toast({ ...props, variant: "default" })
  },
  success: (props: ToastProps) => {
    const { toast } = useToast()
    return toast({ ...props, variant: "success" })
  },
  warning: (props: ToastProps) => {
    const { toast } = useToast()
    return toast({ ...props, variant: "warning" })
  },
  error: (props: ToastProps) => {
    const { toast } = useToast()
    return toast({ ...props, variant: "destructive" })
  },
}
