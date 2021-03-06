import { Stack } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SidebarNav(){
    return(
        <Stack spacing="15" align="flex-start">

        <NavSection title="Geral">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>

        <NavSection title="Automação">
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
        </Stack>
    )
}