var abi = [
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'members',
    'outputs': [
      {
        'name': 'memberId',
        'type': 'uint256'
      },
      {
        'name': 'membershipType',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'membersAccts',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'memberFee',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': '_from',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_to',
        'type': 'address'
      }
    ],
    'name': 'UpdateMemberAddress',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': '_address',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_memberId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': '_membershipType',
        'type': 'uint256'
      }
    ],
    'name': 'NewMember',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': '_address',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'Refund',
    'type': 'event'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_memberFee',
        'type': 'uint256'
      }
    ],
    'name': 'setFee',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'requestMembership',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address'
      },
      {
        'name': '_to',
        'type': 'address'
      }
    ],
    'name': 'updateMemberAddress',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_memberAddress',
        'type': 'address'
      },
      {
        'name': '_membershipType',
        'type': 'uint256'
      }
    ],
    'name': 'setMembershipType',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getMembers',
    'outputs': [
      {
        'name': '',
        'type': 'address[]'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_memberAddress',
        'type': 'address'
      }
    ],
    'name': 'getMember',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'countMembers',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_memberAddress',
        'type': 'address'
      }
    ],
    'name': 'getMembershipType',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_new_owner',
        'type': 'address'
      }
    ],
    'name': 'setOwner',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'refund',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]

module.exports = abi
