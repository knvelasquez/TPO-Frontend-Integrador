<template>
    <h1>Temporadas</h1>
    <div class="pagination">
        <ol id="numbers"></ol>
    </div>
    <div style="margin: 0 auto;">
        <table id="my-table" style="width: 100%;">
            <thead>
                <tr>
                    <th style="width: 25%;">Episodio</th>
                    <th style="width: 25%;">Nombre</th>
                    <th style="width: 25%;">Fecha Estreno</th>
                    <th>Personajes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in temporadas" :key="item.id">
                    <td>{{item.episode}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.air_date}}</td>
                    <td>
                        <!--<div style="overflow: auto;height: 130px;"></div>-->
                        {{item.characters.length}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;

export default {
    name: 'Pagina2',
    data(){
        return {
            temporadas:[]
        }
    },
    methods: {
        getTemporadas:async function(){
            console.log("cargando información")
            const response=await fetch('https://rickandmortyapi.com/api/episode')
            const data = await response.json();
            console.log(data.results)
            this.temporadas=data.results
            return data.results
        },
        setTest:function(){
            const rowsPerPage = 10;
            const rows = $('#my-table tbody tr');
            const rowsCount = rows.length;
            const pageCount = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
            const numbers = $('#numbers');

            // Generate the pagination.
            for (var i = 0; i < pageCount; i++) {
                numbers.append('<li><a href="#">' + (i+1) + '</a></li>');
            }

            // Mark the first page link as active.
            $('#numbers li:first-child a').addClass('active');

            // Display the first set of rows.
            displayRows(1);

            // On pagination click.
            $('#numbers li a').click(function(e) {
                var $this = $(this);

                e.preventDefault();

                // Remove the active class from the links.
                $('#numbers li a').removeClass('active');

                // Add the active class to the current link.
                $this.addClass('active');

                // Show the rows corresponding to the clicked page ID.
                displayRows($this.text());
            });

            // Function that displays rows for a specific page.
            function displayRows(index) {
                var start = (index - 1) * rowsPerPage;
                var end = start + rowsPerPage;

                // Hide all rows.
                rows.hide();

                // Show the proper rows for this page.
                rows.slice(start, end).show();
            }
        }
    },
    updated(){
        this.setTest()
    },
    mounted(){
        this.getTemporadas()
    }
}
</script>

<style>
/* Table styles. */
td,
th {
	text-align: left;
	padding: 0.5rem 1rem;
}

tbody tr:nth-child(odd) {
	background-color: #00a59d1a;
}

th {
	background: #8339aa;
	color: #fff;
}

/* Pagination. */
.pagination {
	/*background: #333;*/
	padding: 1rem;
	margin-bottom: 1rem;
	text-align: center;
	display: flex;
	justify-content: center;
}

#numbers {
	padding: 0;
	margin: 0 2rem;
	list-style-type: none;
	display: flex;
}

#numbers li a {
	color: #000;
	padding: 0.5rem 1rem;
	text-decoration: none;
	opacity: 0.6;
    font-weight: bold;
}

#numbers li a:hover {
	opacity: 1;
}

#numbers li a.active {
	opacity: 1;
	background: #8339aa;
    color: #fff;
    font-weight: bold;
}

</style>