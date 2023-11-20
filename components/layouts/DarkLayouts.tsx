

 const DarkLayouts = ({ children }: { children: React.ReactNode}) => {
  return (
    <div
    style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '5px',
      padding: '10px'
    }}
    >
    {children}
    </div>
  )
}

export default DarkLayouts;
