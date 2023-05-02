
import React from 'react';
const mWaySearchTree = (filteredContacts) => {
    return function search(val, root, pos) {
        val=filteredContacts
    // if root is null then return
    if (root === null) {
        return null;
    } else {
        // if node is found
        if (searchNode(val, root, pos)) {
        return root;
        }
        // if not then search in child nodes
        else {
        return search(val, root.child[pos.value], pos);
        }
    }
    }
    
    function searchNode(val, n, pos) {
    // if val is less than node.value[1]
    if (val < n.value[1]) {
        pos.value = 0;
        return false;
    }
    // if the val is greater
    else {
        pos.value = n.count;
        // check in the child array
        // for correct position
        while (val < n.value[pos.value] && pos.value > 1) {
        pos.value--;
        }
        if (val === n.value[pos.value]) {
        return true;
        } else {
        return false;
        }
    }
    }
}
export default mWaySearchTree;