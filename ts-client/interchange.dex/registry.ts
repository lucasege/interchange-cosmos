import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCancelSellOrder } from "./types/interchange/dex/tx";
import { MsgCancelBuyOrder } from "./types/interchange/dex/tx";
import { MsgSendSellOrder } from "./types/interchange/dex/tx";
import { MsgSendCreatePair } from "./types/interchange/dex/tx";
import { MsgSendBuyOrder } from "./types/interchange/dex/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/interchange.dex.MsgCancelSellOrder", MsgCancelSellOrder],
    ["/interchange.dex.MsgCancelBuyOrder", MsgCancelBuyOrder],
    ["/interchange.dex.MsgSendSellOrder", MsgSendSellOrder],
    ["/interchange.dex.MsgSendCreatePair", MsgSendCreatePair],
    ["/interchange.dex.MsgSendBuyOrder", MsgSendBuyOrder],
    
];

export { msgTypes }