import { Typography } from "antd"
import { IReactFC } from "@/types";

type Props = IReactFC & {
    title: string;
    testId?: string;
}

const FiltersWrapper: React.FC<Props> = ({ children, title, testId }) => (
    <div
        className="pt-6 pb-2 flex flex-col items-start gap-4"
        data-testid={testId}>
        <Typography.Text className="!text-lg !font-normal">
            {title}
        </Typography.Text>
        {children}
    </div>
)

export default FiltersWrapper