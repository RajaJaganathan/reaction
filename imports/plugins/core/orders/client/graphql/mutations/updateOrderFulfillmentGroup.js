import gql from "graphql-tag";

export default gql`
  mutation updateOrderFulfillmentGroupMutation($orderFulfillmentGroupId: ID!, $orderId: ID!, $status: String, $tracking: String) {
    updateOrderFulfillmentGroup(input: {
      orderFulfillmentGroupId: $orderFulfillmentGroupId,
      orderId: $orderId,
      status: $status,
      tracking: $tracking
    }) {
      order {
        fulfillmentGroups {
          status
          tracking
        }
      }
    }
  }
`;
