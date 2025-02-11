import { Channel, ChannelSDKType, Packet, PacketSDKType, Counterparty, CounterpartySDKType, stateFromJSON, orderFromJSON } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../helpers";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType } from "./tx";
export interface MsgChannelOpenInitAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenInit";
  value: {
    port_id: string;
    channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
    };
    signer: string;
  };
}
export interface MsgChannelOpenTryAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenTry";
  value: {
    port_id: string;
    previous_channel_id: string;
    channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
    };
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelOpenAckAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenAck";
  value: {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelOpenConfirmAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenConfirm";
  value: {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgChannelCloseInitAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelCloseInit";
  value: {
    port_id: string;
    channel_id: string;
    signer: string;
  };
}
export interface MsgChannelCloseConfirmAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgChannelCloseConfirm";
  value: {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgRecvPacketAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    proof_commitment: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgTimeoutAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTimeout";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    proof_unreceived: Uint8Array;
    proof_height: AminoHeight;
    next_sequence_recv: string;
    signer: string;
  };
}
export interface MsgTimeoutOnCloseAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTimeoutOnClose";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height: AminoHeight;
    next_sequence_recv: string;
    signer: string;
  };
}
export interface MsgAcknowledgementAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": {
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    toAmino: ({
      portId,
      channel,
      signer
    }: MsgChannelOpenInit): MsgChannelOpenInitAminoType["value"] => {
      return {
        port_id: portId,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.portId,
            channel_id: channel.counterparty.channelId
          },
          connection_hops: channel.connectionHops,
          version: channel.version
        },
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel,
      signer
    }: MsgChannelOpenInitAminoType["value"]): MsgChannelOpenInit => {
      return {
        portId: port_id,
        channel: {
          state: stateFromJSON(channel.state),
          ordering: orderFromJSON(channel.ordering),
          counterparty: {
            portId: channel.counterparty.port_id,
            channelId: channel.counterparty.channel_id
          },
          connectionHops: channel.connection_hops,
          version: channel.version
        },
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenTry": {
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    toAmino: ({
      portId,
      previousChannelId,
      channel,
      counterpartyVersion,
      proofInit,
      proofHeight,
      signer
    }: MsgChannelOpenTry): MsgChannelOpenTryAminoType["value"] => {
      return {
        port_id: portId,
        previous_channel_id: previousChannelId,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.portId,
            channel_id: channel.counterparty.channelId
          },
          connection_hops: channel.connectionHops,
          version: channel.version
        },
        counterparty_version: counterpartyVersion,
        proof_init: proofInit,
        proof_height: proofHeight ? {
          revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(proofHeight.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      port_id,
      previous_channel_id,
      channel,
      counterparty_version,
      proof_init,
      proof_height,
      signer
    }: MsgChannelOpenTryAminoType["value"]): MsgChannelOpenTry => {
      return {
        portId: port_id,
        previousChannelId: previous_channel_id,
        channel: {
          state: stateFromJSON(channel.state),
          ordering: orderFromJSON(channel.ordering),
          counterparty: {
            portId: channel.counterparty.port_id,
            channelId: channel.counterparty.channel_id
          },
          connectionHops: channel.connection_hops,
          version: channel.version
        },
        counterpartyVersion: counterparty_version,
        proofInit: proof_init,
        proofHeight: proof_height ? {
          revisionHeight: BigInt(proof_height.revision_height || "0", true),
          revisionNumber: BigInt(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenAck": {
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    toAmino: ({
      portId,
      channelId,
      counterpartyChannelId,
      counterpartyVersion,
      proofTry,
      proofHeight,
      signer
    }: MsgChannelOpenAck): MsgChannelOpenAckAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        counterparty_channel_id: counterpartyChannelId,
        counterparty_version: counterpartyVersion,
        proof_try: proofTry,
        proof_height: proofHeight ? {
          revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(proofHeight.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      counterparty_channel_id,
      counterparty_version,
      proof_try,
      proof_height,
      signer
    }: MsgChannelOpenAckAminoType["value"]): MsgChannelOpenAck => {
      return {
        portId: port_id,
        channelId: channel_id,
        counterpartyChannelId: counterparty_channel_id,
        counterpartyVersion: counterparty_version,
        proofTry: proof_try,
        proofHeight: proof_height ? {
          revisionHeight: BigInt(proof_height.revision_height || "0", true),
          revisionNumber: BigInt(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    toAmino: ({
      portId,
      channelId,
      proofAck,
      proofHeight,
      signer
    }: MsgChannelOpenConfirm): MsgChannelOpenConfirmAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        proof_ack: proofAck,
        proof_height: proofHeight ? {
          revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(proofHeight.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proof_ack,
      proof_height,
      signer
    }: MsgChannelOpenConfirmAminoType["value"]): MsgChannelOpenConfirm => {
      return {
        portId: port_id,
        channelId: channel_id,
        proofAck: proof_ack,
        proofHeight: proof_height ? {
          revisionHeight: BigInt(proof_height.revision_height || "0", true),
          revisionNumber: BigInt(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelCloseInit": {
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    toAmino: ({
      portId,
      channelId,
      signer
    }: MsgChannelCloseInit): MsgChannelCloseInitAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      signer
    }: MsgChannelCloseInitAminoType["value"]): MsgChannelCloseInit => {
      return {
        portId: port_id,
        channelId: channel_id,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    toAmino: ({
      portId,
      channelId,
      proofInit,
      proofHeight,
      signer
    }: MsgChannelCloseConfirm): MsgChannelCloseConfirmAminoType["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        proof_init: proofInit,
        proof_height: proofHeight ? {
          revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(proofHeight.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proof_init,
      proof_height,
      signer
    }: MsgChannelCloseConfirmAminoType["value"]): MsgChannelCloseConfirm => {
      return {
        portId: port_id,
        channelId: channel_id,
        proofInit: proof_init,
        proofHeight: proof_height ? {
          revisionHeight: BigInt(proof_height.revision_height || "0", true),
          revisionNumber: BigInt(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: ({
      packet,
      proofCommitment,
      proofHeight,
      signer
    }: MsgRecvPacket): MsgRecvPacketAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_commitment: proofCommitment,
        proof_height: proofHeight ? {
          revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(proofHeight.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_commitment,
      proof_height,
      signer
    }: MsgRecvPacketAminoType["value"]): MsgRecvPacket => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: BigInt(packet.timeout_height.revision_height || "0", true),
            revisionNumber: BigInt(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: BigInt(packet.timeout_timestamp)
        },
        proofCommitment: proof_commitment,
        proofHeight: proof_height ? {
          revisionHeight: BigInt(proof_height.revision_height || "0", true),
          revisionNumber: BigInt(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: ({
      packet,
      proofUnreceived,
      proofHeight,
      nextSequenceRecv,
      signer
    }: MsgTimeout): MsgTimeoutAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_unreceived: proofUnreceived,
        proof_height: proofHeight ? {
          revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(proofHeight.revisionNumber)?.toString()
        } : {},
        next_sequence_recv: nextSequenceRecv.toString(),
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_height,
      next_sequence_recv,
      signer
    }: MsgTimeoutAminoType["value"]): MsgTimeout => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: BigInt(packet.timeout_height.revision_height || "0", true),
            revisionNumber: BigInt(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: BigInt(packet.timeout_timestamp)
        },
        proofUnreceived: proof_unreceived,
        proofHeight: proof_height ? {
          revisionHeight: BigInt(proof_height.revision_height || "0", true),
          revisionNumber: BigInt(proof_height.revision_number || "0", true)
        } : undefined,
        nextSequenceRecv: BigInt(next_sequence_recv),
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgTimeoutOnClose": {
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    toAmino: ({
      packet,
      proofUnreceived,
      proofClose,
      proofHeight,
      nextSequenceRecv,
      signer
    }: MsgTimeoutOnClose): MsgTimeoutOnCloseAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_unreceived: proofUnreceived,
        proof_close: proofClose,
        proof_height: proofHeight ? {
          revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(proofHeight.revisionNumber)?.toString()
        } : {},
        next_sequence_recv: nextSequenceRecv.toString(),
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_close,
      proof_height,
      next_sequence_recv,
      signer
    }: MsgTimeoutOnCloseAminoType["value"]): MsgTimeoutOnClose => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: BigInt(packet.timeout_height.revision_height || "0", true),
            revisionNumber: BigInt(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: BigInt(packet.timeout_timestamp)
        },
        proofUnreceived: proof_unreceived,
        proofClose: proof_close,
        proofHeight: proof_height ? {
          revisionHeight: BigInt(proof_height.revision_height || "0", true),
          revisionNumber: BigInt(proof_height.revision_number || "0", true)
        } : undefined,
        nextSequenceRecv: BigInt(next_sequence_recv),
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: ({
      packet,
      acknowledgement,
      proofAcked,
      proofHeight,
      signer
    }: MsgAcknowledgement): MsgAcknowledgementAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        acknowledgement,
        proof_acked: proofAcked,
        proof_height: proofHeight ? {
          revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(proofHeight.revisionNumber)?.toString()
        } : {},
        signer
      };
    },
    fromAmino: ({
      packet,
      acknowledgement,
      proof_acked,
      proof_height,
      signer
    }: MsgAcknowledgementAminoType["value"]): MsgAcknowledgement => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: BigInt(packet.timeout_height.revision_height || "0", true),
            revisionNumber: BigInt(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: BigInt(packet.timeout_timestamp)
        },
        acknowledgement,
        proofAcked: proof_acked,
        proofHeight: proof_height ? {
          revisionHeight: BigInt(proof_height.revision_height || "0", true),
          revisionNumber: BigInt(proof_height.revision_number || "0", true)
        } : undefined,
        signer
      };
    }
  }
};