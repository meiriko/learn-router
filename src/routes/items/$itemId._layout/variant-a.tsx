import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items/$itemId/_layout/variant-a')({
  component: () => <div>Hello /items/_layout/variant-a!</div>
})