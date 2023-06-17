import MineHeader from "./main-header"

const Layout = (props) => {
  return (
   <>
   <MineHeader />
   <main>
    {props.children}
   </main>
   </>
  )
}

export default Layout