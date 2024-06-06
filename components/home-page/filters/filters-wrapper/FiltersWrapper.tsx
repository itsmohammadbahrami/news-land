import { Typography } from "antd"
import { IReactFC } from "@/types";

const FiltersWrapper: React.FC<IReactFC & { title: string }> = ({ children, title }) => (
    <div className="pt-6 pb-2 flex flex-col items-start gap-4">
        <Typography.Text className="!text-lg !font-normal">
            {title}
        </Typography.Text>
        {children}
    </div>
)

export default FiltersWrapper