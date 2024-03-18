import { AppBar, Container, Toolbar, Link as MuiLink } from '@mui/material'
import Link from 'next/link'

export function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavItem title="App" href="/" />
          <NavItem title="Tours" href="/tours" />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

type NavItemProps = {
  title: string
  href: string
}

function NavItem({ title, href }: NavItemProps) {
  return (
    <MuiLink component={Link} href={href} color="inherit" underline="hover" variant="h6" paddingRight={4}>
      {title}
    </MuiLink>
  )
}
