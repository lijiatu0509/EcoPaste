import { Button, Card, Popconfirm, Slider } from "antd";
import type { SliderBaseProps } from "antd/es/slider";

const Record = () => {
	const labels = ["天", "周", "月", "季度", "半年", "年", "无限制"];
	const steps = labels.length;
	const step = Math.round(100 / (steps - 1));

	const generateMarks = () => {
		const marks: SliderBaseProps["marks"] = {};

		for (let i = 0; i < steps; i++) {
			marks[Math.min(i * step, 100)] = labels[i];
		}

		return marks;
	};

	return (
		<Card
			title="剪切板历史记录"
			extra={
				<Popconfirm placement="bottomRight" title="确定要清空历史记录吗？">
					<Button danger type="primary">
						清空
					</Button>
				</Popconfirm>
			}
		>
			<Slider
				defaultValue={100}
				step={step}
				marks={generateMarks()}
				tooltip={{ formatter: null }}
			/>
		</Card>
	);
};

export default Record;