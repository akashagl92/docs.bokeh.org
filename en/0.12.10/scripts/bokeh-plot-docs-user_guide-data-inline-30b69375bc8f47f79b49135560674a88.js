(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("2c76f4d2-097a-4abf-8c85-59b567e36b0c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2c76f4d2-097a-4abf-8c85-59b567e36b0c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"faf9d95b-f6b8-4768-8fa9-d1f0a7cb63fb":{"roots":{"references":[{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"a338bf5e-28d7-4b1c-b2e5-d99ca6185132","type":"Circle"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"beb9ecd2-4cb3-4dff-88bf-764adc45cbf5","type":"BoxSelectTool"},{"id":"301557c2-52e3-425d-baeb-e8029bce48ef","type":"ResetTool"},{"id":"9a37d717-de21-4d0c-abd6-74d1697a1856","type":"HelpTool"},{"id":"ceb4e626-57cd-44c5-aead-dab8b57b4472","type":"BoxSelectTool"},{"id":"f1d45d49-95b2-410d-9ad4-ddcd6d1aa95a","type":"ResetTool"},{"id":"c2fdc68d-3ba5-4176-9f20-d3d08578315b","type":"HelpTool"}]},"id":"ebce3940-71cc-4d15-b280-e12f25cd4974","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"f36c5ee6-ea77-40c6-b23a-d73ddd1c528d","type":"ColumnDataSource"},"glyph":{"id":"a338bf5e-28d7-4b1c-b2e5-d99ca6185132","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c6cc2b0c-acf6-41dc-9ebe-c666e8db2322","type":"Circle"},"selection_glyph":null,"view":{"id":"16157d3b-4a8f-4fa9-bfc5-54d23be69c32","type":"CDSView"}},"id":"5f2df0f0-b9c4-488d-a9ea-0d31b069e1dd","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1bc4e493-c9ee-4888-8fde-4f1f759ccfdc","type":"DataRange1d"},{"attributes":{"below":[{"id":"0175b585-5106-4582-830e-5e7835d8630c","type":"LinearAxis"}],"left":[{"id":"6fdc5f61-351f-4612-a138-fe92600f7536","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0175b585-5106-4582-830e-5e7835d8630c","type":"LinearAxis"},{"id":"07ed4c01-2c95-47bb-bffd-5ec15b8f28e7","type":"Grid"},{"id":"6fdc5f61-351f-4612-a138-fe92600f7536","type":"LinearAxis"},{"id":"1395f132-a36e-41ad-85d0-c8765c6eb0be","type":"Grid"},{"id":"856d067a-65f8-4596-aaac-de28b7c6a3e8","type":"BoxAnnotation"},{"id":"a9f26710-6165-4e25-95e4-411c6b36feb1","type":"GlyphRenderer"}],"title":{"id":"33c4fa12-0620-4d38-b1c4-1686acd1e872","type":"Title"},"toolbar":{"id":"0f8a43bc-4bfe-42ba-9f55-49cb0a3ca999","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e793db40-3318-4343-b505-3646fe41511f","type":"DataRange1d"},"x_scale":{"id":"87d9d164-05c7-49a5-92c2-ca1c86cbc971","type":"LinearScale"},"y_range":{"id":"1bc4e493-c9ee-4888-8fde-4f1f759ccfdc","type":"DataRange1d"},"y_scale":{"id":"963fa46b-6bc9-4283-a2b1-2e58d9b66ccb","type":"LinearScale"}},"id":"cadbf92e-8346-46f3-8bbb-dae8fe95bb8b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Setosa only"},"id":"3cdc249f-f085-4530-b7bb-6155c9ef51d2","type":"Title"},{"attributes":{"plot":null,"text":"Full data set"},"id":"33c4fa12-0620-4d38-b1c4-1686acd1e872","type":"Title"},{"attributes":{},"id":"8f4d9e32-a29e-48bb-ad75-aea05042fe5c","type":"BasicTickFormatter"},{"attributes":{},"id":"f9ac51b3-9668-4d7b-81a2-d2e4982b3a22","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cadbf92e-8346-46f3-8bbb-dae8fe95bb8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b7eccdb-378f-4f4b-9f3c-1a91386b54fc","type":"BasicTicker"}},"id":"07ed4c01-2c95-47bb-bffd-5ec15b8f28e7","type":"Grid"},{"attributes":{"column_name":"species","group":"versicolor"},"id":"6295ca8a-b1ec-436f-bf89-587f1946c8ce","type":"GroupFilter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24976cdc-4cad-47f1-882f-46bbb77ac166","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"cadbf92e-8346-46f3-8bbb-dae8fe95bb8b","subtype":"Figure","type":"Plot"},{"id":"d31af20b-d4e6-4a86-b677-4bb9ea422941","subtype":"Figure","type":"Plot"}]},"id":"7840fc32-a704-4b6d-914d-2675003acbd9","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"cadbf92e-8346-46f3-8bbb-dae8fe95bb8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"494a531f-5304-4db4-b84e-e6c34c07fdb1","type":"BasicTicker"}},"id":"1395f132-a36e-41ad-85d0-c8765c6eb0be","type":"Grid"},{"attributes":{"callback":null},"id":"e793db40-3318-4343-b505-3646fe41511f","type":"DataRange1d"},{"attributes":{},"id":"a0df5005-20a2-40c3-96d9-530aa7908447","type":"BasicTickFormatter"},{"attributes":{},"id":"9a37d717-de21-4d0c-abd6-74d1697a1856","type":"HelpTool"},{"attributes":{"formatter":{"id":"8f4d9e32-a29e-48bb-ad75-aea05042fe5c","type":"BasicTickFormatter"},"plot":{"id":"cadbf92e-8346-46f3-8bbb-dae8fe95bb8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b7eccdb-378f-4f4b-9f3c-1a91386b54fc","type":"BasicTicker"}},"id":"0175b585-5106-4582-830e-5e7835d8630c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ceb4e626-57cd-44c5-aead-dab8b57b4472","type":"BoxSelectTool"},{"id":"f1d45d49-95b2-410d-9ad4-ddcd6d1aa95a","type":"ResetTool"},{"id":"c2fdc68d-3ba5-4176-9f20-d3d08578315b","type":"HelpTool"}]},"id":"c035dae8-db18-436b-81d2-b0a009c79de3","type":"Toolbar"},{"attributes":{"formatter":{"id":"f2e57f74-3a38-49b7-8b5d-133538e2ff71","type":"BasicTickFormatter"},"plot":{"id":"cadbf92e-8346-46f3-8bbb-dae8fe95bb8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"494a531f-5304-4db4-b84e-e6c34c07fdb1","type":"BasicTicker"}},"id":"6fdc5f61-351f-4612-a138-fe92600f7536","type":"LinearAxis"},{"attributes":{},"id":"f2e57f74-3a38-49b7-8b5d-133538e2ff71","type":"BasicTickFormatter"},{"attributes":{},"id":"963fa46b-6bc9-4283-a2b1-2e58d9b66ccb","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"24976cdc-4cad-47f1-882f-46bbb77ac166","type":"BoxAnnotation"},"renderers":[{"id":"5f2df0f0-b9c4-488d-a9ea-0d31b069e1dd","type":"GlyphRenderer"}]},"id":"ceb4e626-57cd-44c5-aead-dab8b57b4472","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"2018138d-763c-4cd4-b45b-fb1eb07e47a1","type":"LinearAxis"}],"left":[{"id":"fcc29cd3-b8c3-4801-b536-a2d6de71cdc9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2018138d-763c-4cd4-b45b-fb1eb07e47a1","type":"LinearAxis"},{"id":"11b99c38-3a13-436b-b7db-e45cca11380f","type":"Grid"},{"id":"fcc29cd3-b8c3-4801-b536-a2d6de71cdc9","type":"LinearAxis"},{"id":"afbf54ff-2b69-40d0-9a7d-74c331403969","type":"Grid"},{"id":"24976cdc-4cad-47f1-882f-46bbb77ac166","type":"BoxAnnotation"},{"id":"5f2df0f0-b9c4-488d-a9ea-0d31b069e1dd","type":"GlyphRenderer"}],"title":{"id":"3cdc249f-f085-4530-b7bb-6155c9ef51d2","type":"Title"},"toolbar":{"id":"c035dae8-db18-436b-81d2-b0a009c79de3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e793db40-3318-4343-b505-3646fe41511f","type":"DataRange1d"},"x_scale":{"id":"6f091d75-3c6c-42a6-9b51-fcf60e9bff52","type":"LinearScale"},"y_range":{"id":"1bc4e493-c9ee-4888-8fde-4f1f759ccfdc","type":"DataRange1d"},"y_scale":{"id":"a80bfa51-4216-4183-959c-a87f52a40197","type":"LinearScale"}},"id":"d31af20b-d4e6-4a86-b677-4bb9ea422941","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"f9ac51b3-9668-4d7b-81a2-d2e4982b3a22","type":"BasicTickFormatter"},"plot":{"id":"d31af20b-d4e6-4a86-b677-4bb9ea422941","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a99bd5e-02a4-49d3-94e8-8f0cb83076c0","type":"BasicTicker"}},"id":"fcc29cd3-b8c3-4801-b536-a2d6de71cdc9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"c6cc2b0c-acf6-41dc-9ebe-c666e8db2322","type":"Circle"},{"attributes":{},"id":"301557c2-52e3-425d-baeb-e8029bce48ef","type":"ResetTool"},{"attributes":{},"id":"c2fdc68d-3ba5-4176-9f20-d3d08578315b","type":"HelpTool"},{"attributes":{"data_source":{"id":"f36c5ee6-ea77-40c6-b23a-d73ddd1c528d","type":"ColumnDataSource"},"glyph":{"id":"8a8c27da-c088-4245-9ee3-ca3cd2526126","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8b290895-72d8-4605-9f1b-bbb4987ef05c","type":"Circle"},"selection_glyph":null,"view":{"id":"50d4e8c3-24a4-4515-a44d-a489d859ec40","type":"CDSView"}},"id":"a9f26710-6165-4e25-95e4-411c6b36feb1","type":"GlyphRenderer"},{"attributes":{},"id":"87d9d164-05c7-49a5-92c2-ca1c86cbc971","type":"LinearScale"},{"attributes":{"source":{"id":"f36c5ee6-ea77-40c6-b23a-d73ddd1c528d","type":"ColumnDataSource"}},"id":"50d4e8c3-24a4-4515-a44d-a489d859ec40","type":"CDSView"},{"attributes":{"children":[{"id":"ebce3940-71cc-4d15-b280-e12f25cd4974","type":"ToolbarBox"},{"id":"292fda59-ba19-4011-9cc9-919770a2abf4","type":"Column"}]},"id":"59b3f996-c011-456c-b3a6-38f769b5c5c8","type":"Column"},{"attributes":{"filters":[{"id":"6295ca8a-b1ec-436f-bf89-587f1946c8ce","type":"GroupFilter"}],"source":{"id":"f36c5ee6-ea77-40c6-b23a-d73ddd1c528d","type":"ColumnDataSource"}},"id":"16157d3b-4a8f-4fa9-bfc5-54d23be69c32","type":"CDSView"},{"attributes":{"fill_color":{"value":"black"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"8a8c27da-c088-4245-9ee3-ca3cd2526126","type":"Circle"},{"attributes":{},"id":"6f091d75-3c6c-42a6-9b51-fcf60e9bff52","type":"LinearScale"},{"attributes":{},"id":"5a99bd5e-02a4-49d3-94e8-8f0cb83076c0","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"8b290895-72d8-4605-9f1b-bbb4987ef05c","type":"Circle"},{"attributes":{"callback":null,"column_names":["sepal_length","sepal_width","petal_length","petal_width","species","color","index"],"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]},"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"]}},"id":"f36c5ee6-ea77-40c6-b23a-d73ddd1c528d","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"856d067a-65f8-4596-aaac-de28b7c6a3e8","type":"BoxAnnotation"},"renderers":[{"id":"a9f26710-6165-4e25-95e4-411c6b36feb1","type":"GlyphRenderer"}]},"id":"beb9ecd2-4cb3-4dff-88bf-764adc45cbf5","type":"BoxSelectTool"},{"attributes":{},"id":"7e0b1db5-e566-44ae-a15e-529cdd61800c","type":"BasicTicker"},{"attributes":{},"id":"a80bfa51-4216-4183-959c-a87f52a40197","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"856d067a-65f8-4596-aaac-de28b7c6a3e8","type":"BoxAnnotation"},{"attributes":{},"id":"6b7eccdb-378f-4f4b-9f3c-1a91386b54fc","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"beb9ecd2-4cb3-4dff-88bf-764adc45cbf5","type":"BoxSelectTool"},{"id":"301557c2-52e3-425d-baeb-e8029bce48ef","type":"ResetTool"},{"id":"9a37d717-de21-4d0c-abd6-74d1697a1856","type":"HelpTool"}]},"id":"0f8a43bc-4bfe-42ba-9f55-49cb0a3ca999","type":"Toolbar"},{"attributes":{"children":[{"id":"7840fc32-a704-4b6d-914d-2675003acbd9","type":"Row"}]},"id":"292fda59-ba19-4011-9cc9-919770a2abf4","type":"Column"},{"attributes":{"formatter":{"id":"a0df5005-20a2-40c3-96d9-530aa7908447","type":"BasicTickFormatter"},"plot":{"id":"d31af20b-d4e6-4a86-b677-4bb9ea422941","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e0b1db5-e566-44ae-a15e-529cdd61800c","type":"BasicTicker"}},"id":"2018138d-763c-4cd4-b45b-fb1eb07e47a1","type":"LinearAxis"},{"attributes":{},"id":"494a531f-5304-4db4-b84e-e6c34c07fdb1","type":"BasicTicker"},{"attributes":{"plot":{"id":"d31af20b-d4e6-4a86-b677-4bb9ea422941","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e0b1db5-e566-44ae-a15e-529cdd61800c","type":"BasicTicker"}},"id":"11b99c38-3a13-436b-b7db-e45cca11380f","type":"Grid"},{"attributes":{},"id":"f1d45d49-95b2-410d-9ad4-ddcd6d1aa95a","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"d31af20b-d4e6-4a86-b677-4bb9ea422941","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a99bd5e-02a4-49d3-94e8-8f0cb83076c0","type":"BasicTicker"}},"id":"afbf54ff-2b69-40d0-9a7d-74c331403969","type":"Grid"}],"root_ids":["59b3f996-c011-456c-b3a6-38f769b5c5c8"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"faf9d95b-f6b8-4768-8fa9-d1f0a7cb63fb","elementid":"2c76f4d2-097a-4abf-8c85-59b567e36b0c","modelid":"59b3f996-c011-456c-b3a6-38f769b5c5c8"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
