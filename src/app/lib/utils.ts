export async function getPart(id: string) {
    // In a real app, this would fetch from your database
    return {
      id,
      title: 'Example Part',
      description: 'This is an example part description',
      price: 99.99,
      // Add other fields as needed
    }
  }
  
  export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }
