import React from 'react';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Member } from '../../types/member/member';

interface TopAgentProps {
	agent: Member;
}
const TopAgentCard = (props: TopAgentProps) => {
	const { agent } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const agentImage = agent?.memberImage
		? `${process.env.REACT_APP_API_URL}/${agent?.memberImage}`
		: '/img/profile/defaultUser.svg';

	/** HANDLERS **/
	const pushDetailHandler = async (agentId: string) => {
		await router.push({ pathname: '/agent/detail/', query: { id: agentId } });
	};

	if (device === 'mobile') {
		return (
			<Stack className="top-agent-card">
				<img onClick={() => pushDetailHandler(agent?._id)} src={agentImage} alt="" />

				<strong onClick={()=>pushDetailHandler(agent?._id)}>{agent?.memberNick}</strong>
				<span>{agent?.memberType}</span>
			</Stack>
		);
	} else {
		return (
			<Stack className="top-agent-card">
				<img onClick={() => pushDetailHandler(agent?._id)} src={agentImage} alt="" />

				<strong onClick={()=>pushDetailHandler(agent?._id)}> {agent?.memberNick}</strong>
				<span>{agent?.memberType}</span>
			</Stack>
		);
	}
};

export default TopAgentCard;
