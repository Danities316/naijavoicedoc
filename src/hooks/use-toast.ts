
import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"
import { useToast as useToastOriginal } from "@radix-ui/react-toast"
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react"

type ToasterToast = Toast & {
  id: string
  title?: ReactNode
  description?: ReactNode
  action?: ToastActionElement
}

const ToastContext = createContext<{
  toasts: ToasterToast[]
  addToast: (toast: Toast) => void
  removeToast: (id: string) => void
  updateToast: (id: string, toast: Toast) => void
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  updateToast: () => {},
})

export function ToastProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toasts, setToasts] = useState<ToasterToast[]>([])

  const addToast = (toast: Toast) => {
    const id = crypto.randomUUID()
    setToasts((prevToasts) => [...prevToasts, { ...toast, id }])
    return id
  }

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  const updateToast = (id: string, toast: Toast) => {
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
    toast: (props: Toast) => context.addToast(props),
    dismiss: (id: string) => context.removeToast(id),
  }
}

export type { ToasterToast }

export const toast = {
  // Default toast
  default: (props: Toast) => {
    const { toast } = useToast()
    return toast(props)
  },
  // Variants
  info: (props: Toast) => {
    const { toast } = useToast()
    return toast({ ...props, variant: "default" })
  },
  success: (props: Toast) => {
    const { toast } = useToast()
    return toast({ ...props, variant: "success" })
  },
  warning: (props: Toast) => {
    const { toast } = useToast()
    return toast({ ...props, variant: "warning" })
  },
  error: (props: Toast) => {
    const { toast } = useToast()
    return toast({ ...props, variant: "destructive" })
  },
}
