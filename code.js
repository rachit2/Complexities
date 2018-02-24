(
	function()
	{
		document.addEventListener('DOMContentLoaded',function(){
			var gridDiv=document.querySelector('#myGrid');
			var gridOptions={
     columnDefs:[{headerName:'Data Structure',field:'ds'},
     
        {
        	headerName:'Time Complexity',
            children: [
                {
                    headerName: "Average",
                    children: [
                {
                    headerName: "Access", width:80, field:"acess",
                },{
                    headerName: "Search", width:80,field:"search",
                },{
                    headerName: "Insertion", width:100, field:"insertion",
                },{
                    headerName: "Deletion", width:80, field:"deletion",
                },],


                },
                {
                    headerName: "Worst", 
                     children: [
                {
                    headerName: "Access", field: "wacess", width:80,
                },{
                    headerName: "Search", field: "wsearch", width:80,
                },{
                    headerName: "Insertion", field: "winsertion", width:100,
                },{
                    headerName: "Deletion", field: "wdeletion", width:80,
                },],
                   
                },
            ]


	    },

{
        	headerName:'Space Complexity',
            children: [
                {
                    headerName: "worst", field:'sc'
                    
            
                },
                
            ]


	    },



        ],
     

     rowData:
     [
     {
     	ds:'Array', acess:'big-theta(1)', search:'big-theta(n)',insertion:'big-theta(n)', deletion:'big-theta(n)',
     	wacess:'O(1)', wsearch:'O(n)',winsertion:'O(n)', wdeletion:'O(n)', sc:'O(n)',
     	  
     },
     {
     	ds:'Stack', acess:'big-theta(n)', search:'big-theta(n)',insertion:'big-theta(1)', deletion:'big-theta(1)',
     	wacess:'O(n)', wsearch:'O(n)',winsertion:'O(1)', wdeletion:'O(1)', sc:'O(n)',
     	  
     },
     {
     	ds:'Queue', acess:'big-theta(n)', search:'big-theta(n)',insertion:'big-theta(1)', deletion:'big-theta(1)',
     	wacess:'O(n)', wsearch:'O(n)',winsertion:'O(1)', wdeletion:'O(1)', sc:'O(n)',
     	  
     },
     {
     	ds:'Link List', acess:'big-theta(n)', search:'big-theta(n)',insertion:'big-theta(1)', deletion:'big-theta(1)',
     	wacess:'O(n)', wsearch:'O(n)',winsertion:'O(1)', wdeletion:'O(1)', sc:'O(n)',
     	  
     },
     ],

    enableSorting: true,

    // enable filtering 
    enableFilter: true
};

			new agGrid.Grid(gridDiv, gridOptions);
		});
	}



)();