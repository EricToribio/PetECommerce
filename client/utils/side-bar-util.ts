interface sideBarTab{
    Name: string;
    Tab: string;
}
export const SideBarTabs : sideBarTab[] =[
    {Name : "Food" , Tab: "food" },
    {Name: "Toys" , Tab: "toys" },
    {Name: "Bedding" , Tab: "bedding" },
    {Name: "Collars, Harnesses & Leases", Tab: "restraints"}
    
]

export const FoodTabs : sideBarTab[] = [
    {Name: "All Dog Products", Tab: ""},
    {Name: "Wet Food", Tab: "wet"},
    {Name: "Dry Food", Tab: "dry"},
    {Name: "Treats" , Tab: "treats"},
    {Name: "Organic", Tab: "organic"},
    {Name: "Vegan", Tab: "vegan"}
]