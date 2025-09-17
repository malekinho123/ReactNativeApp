import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../pages/list";
import User from "../pages/user";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name="List"
                component={List}
            />
            <Tab.Screen
                name="User"
                component={User}
            />

        </Tab.Navigator>
    )
}