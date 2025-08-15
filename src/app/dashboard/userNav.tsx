import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "/dashboard" },
    { name: "Settings", href: "/dashboard/settings" },
    { name: "Billing", href: "/dashboard/billing" },
];

export async function UserNav() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.picture || ""} alt={user?.given_name || ""} />
                        <AvatarFallback>
                            {user?.given_name?.[0]}{user?.family_name?.[0]}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {user?.given_name} {user?.family_name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <LogoutLink className="w-full flex justify-center items-center">
                        Log out
                    </LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}