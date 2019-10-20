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
      };var element = document.getElementById("e15ad173-9859-4868-a980-d890b3ef4184");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e15ad173-9859-4868-a980-d890b3ef4184' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"09edb340-8ef3-4991-868f-ab476d3b53d1":{"roots":{"references":[{"attributes":{"source":{"id":"5b223192-6488-4034-b4c8-c97d96e301f7","type":"ColumnDataSource"}},"id":"b68b7e5f-ba38-4265-9699-0c39ec701bc7","type":"CDSView"},{"attributes":{},"id":"ec9ff733-da9a-454a-ae16-0aff46789d82","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"aed83193-5b8b-452b-95f2-2fa1ae009cdf","type":"PolyAnnotation"}},"id":"841b5d0d-9ce8-4419-8a45-b8797b991eef","type":"LassoSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"fc69b4fc-c0e4-4d49-adf5-68dbabecd26a","type":"PolyAnnotation"}},"id":"8acdd097-79e8-427f-a194-55563d9802ad","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"c754756c-bdeb-4998-ad21-d5a53f5419d1","type":"BasicTickFormatter"},"plot":{"id":"df0db650-7cd9-4625-9ce0-f83da004d5cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"8633628b-f6c1-4715-bfee-db5623cf80a7","type":"BasicTicker"}},"id":"d2f25cf6-2650-456e-a581-50f8e41c0273","type":"LinearAxis"},{"attributes":{},"id":"e129ed58-d75d-4ade-818d-ef1e395d8915","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6e7097d1-9a29-483f-be7b-d3173dad6cd8","type":"BoxSelectTool"},{"id":"841b5d0d-9ce8-4419-8a45-b8797b991eef","type":"LassoSelectTool"},{"id":"e129ed58-d75d-4ade-818d-ef1e395d8915","type":"HelpTool"}]},"id":"680bc6e4-b804-4716-a9b8-92762711b557","type":"Toolbar"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"6e7097d1-9a29-483f-be7b-d3173dad6cd8","type":"BoxSelectTool"},{"id":"841b5d0d-9ce8-4419-8a45-b8797b991eef","type":"LassoSelectTool"},{"id":"e129ed58-d75d-4ade-818d-ef1e395d8915","type":"HelpTool"},{"id":"f9082863-4737-4ac2-9619-68b5f05e6d35","type":"BoxSelectTool"},{"id":"8acdd097-79e8-427f-a194-55563d9802ad","type":"LassoSelectTool"},{"id":"8139bf50-251e-4e98-b1a6-ebaf3b4dba72","type":"HelpTool"}]},"id":"856161cf-ee7c-4fb7-95e0-df83d705a31b","type":"ToolbarBox"},{"attributes":{},"id":"be16d436-7f6f-4fa4-a6f9-5d405b8ed67c","type":"BasicTickFormatter"},{"attributes":{},"id":"e6a97a65-db51-47a1-954b-d3d3907bf0c2","type":"LinearScale"},{"attributes":{"data_source":{"id":"5b223192-6488-4034-b4c8-c97d96e301f7","type":"ColumnDataSource"},"glyph":{"id":"27abb5f1-7e44-4df5-a1ee-1c73bee4d98c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eacba463-07a9-47d7-91c8-c49695697c46","type":"Circle"},"selection_glyph":null,"view":{"id":"093bf6f3-b92f-4f51-beb5-2c3e078bd552","type":"CDSView"}},"id":"0cbd49a2-5ee6-42c2-8949-49449f1569f9","type":"GlyphRenderer"},{"attributes":{},"id":"acace5c1-d159-456f-95a9-e46cb234f3bc","type":"LinearScale"},{"attributes":{"children":[{"id":"856161cf-ee7c-4fb7-95e0-df83d705a31b","type":"ToolbarBox"},{"id":"7e0a2a36-891c-4b50-88b2-e6eb271c3d1f","type":"Column"}]},"id":"b9a55062-184a-4d30-89e6-0acf1bc64d71","type":"Column"},{"attributes":{},"id":"ec7e82f6-5b6d-4c57-8649-1c5e6e7ff9d5","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"eacba463-07a9-47d7-91c8-c49695697c46","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1571e9aa-fadb-4f7e-b78b-d5afae9aba82","type":"BoxAnnotation"},{"attributes":{},"id":"c34fc491-d038-4ca6-ae2d-51c980918737","type":"BasicTicker"},{"attributes":{},"id":"8633628b-f6c1-4715-bfee-db5623cf80a7","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"1571e9aa-fadb-4f7e-b78b-d5afae9aba82","type":"BoxAnnotation"},"renderers":[{"id":"0cbd49a2-5ee6-42c2-8949-49449f1569f9","type":"GlyphRenderer"}]},"id":"f9082863-4737-4ac2-9619-68b5f05e6d35","type":"BoxSelectTool"},{"attributes":{},"id":"c754756c-bdeb-4998-ad21-d5a53f5419d1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"a4d6b1cd-e170-4d7d-bb48-d019c85b6b12","type":"Circle"},{"attributes":{"callback":null},"id":"aacec260-dd48-4fd4-b98d-8b58461eb793","type":"DataRange1d"},{"attributes":{"formatter":{"id":"be16d436-7f6f-4fa4-a6f9-5d405b8ed67c","type":"BasicTickFormatter"},"plot":{"id":"35ed1215-4880-4c74-babd-085c977c91a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"807391d6-df05-43c8-97d7-0dd889c57be7","type":"BasicTicker"}},"id":"c918a1a0-721b-405f-984d-f5fde89ad43c","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ec9ff733-da9a-454a-ae16-0aff46789d82","type":"BasicTickFormatter"},"plot":{"id":"35ed1215-4880-4c74-babd-085c977c91a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"c34fc491-d038-4ca6-ae2d-51c980918737","type":"BasicTicker"}},"id":"66290638-8284-4667-b3b4-1f994d2444d7","type":"LinearAxis"},{"attributes":{"callback":null},"id":"01ab1a99-da3a-4b06-84f6-024edfa43e83","type":"DataRange1d"},{"attributes":{},"id":"807391d6-df05-43c8-97d7-0dd889c57be7","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9905cd5e-5a13-4738-abaf-c2b3df771877","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"509dff62-4cdc-41a1-9535-d241fe49cb3a","type":"BoxAnnotation"},"renderers":[{"id":"74d94b20-6991-4b34-9cc0-42cb4f04b47a","type":"GlyphRenderer"}]},"id":"6e7097d1-9a29-483f-be7b-d3173dad6cd8","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"c918a1a0-721b-405f-984d-f5fde89ad43c","type":"LinearAxis"}],"left":[{"id":"66290638-8284-4667-b3b4-1f994d2444d7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c918a1a0-721b-405f-984d-f5fde89ad43c","type":"LinearAxis"},{"id":"85e61b43-1489-4610-8bca-cc48dba77a09","type":"Grid"},{"id":"66290638-8284-4667-b3b4-1f994d2444d7","type":"LinearAxis"},{"id":"4ea3baa4-72e0-4a84-b062-a265217c6e10","type":"Grid"},{"id":"1571e9aa-fadb-4f7e-b78b-d5afae9aba82","type":"BoxAnnotation"},{"id":"fc69b4fc-c0e4-4d49-adf5-68dbabecd26a","type":"PolyAnnotation"},{"id":"0cbd49a2-5ee6-42c2-8949-49449f1569f9","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"4920f431-49ca-41bf-a878-4ed48c116cd5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9905cd5e-5a13-4738-abaf-c2b3df771877","type":"DataRange1d"},"x_scale":{"id":"acace5c1-d159-456f-95a9-e46cb234f3bc","type":"LinearScale"},"y_range":{"id":"aacec260-dd48-4fd4-b98d-8b58461eb793","type":"DataRange1d"},"y_scale":{"id":"ec7e82f6-5b6d-4c57-8649-1c5e6e7ff9d5","type":"LinearScale"}},"id":"35ed1215-4880-4c74-babd-085c977c91a9","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"df0db650-7cd9-4625-9ce0-f83da004d5cc","subtype":"Figure","type":"Plot"},{"id":"35ed1215-4880-4c74-babd-085c977c91a9","subtype":"Figure","type":"Plot"}]},"id":"707d77cb-f33f-4a39-92ec-35aacaed61f8","type":"Row"},{"attributes":{},"id":"adfa1ad8-c86e-4683-9d4b-e0b0c4b3f1f0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"35ed1215-4880-4c74-babd-085c977c91a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"807391d6-df05-43c8-97d7-0dd889c57be7","type":"BasicTicker"}},"id":"85e61b43-1489-4610-8bca-cc48dba77a09","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"509dff62-4cdc-41a1-9535-d241fe49cb3a","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"5b223192-6488-4034-b4c8-c97d96e301f7","type":"ColumnDataSource"},"glyph":{"id":"687cf15f-4093-45fd-8432-e60f3283c6ed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a4d6b1cd-e170-4d7d-bb48-d019c85b6b12","type":"Circle"},"selection_glyph":null,"view":{"id":"b68b7e5f-ba38-4265-9699-0c39ec701bc7","type":"CDSView"}},"id":"74d94b20-6991-4b34-9cc0-42cb4f04b47a","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"d1aaa115-296a-4fd7-952f-3b2918a58e81","type":"LinearAxis"}],"left":[{"id":"d2f25cf6-2650-456e-a581-50f8e41c0273","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d1aaa115-296a-4fd7-952f-3b2918a58e81","type":"LinearAxis"},{"id":"99c6c4fc-442b-47b3-9980-fd1c8ef7ee41","type":"Grid"},{"id":"d2f25cf6-2650-456e-a581-50f8e41c0273","type":"LinearAxis"},{"id":"a99f326d-f8c2-4b68-9885-06d60561e6fc","type":"Grid"},{"id":"509dff62-4cdc-41a1-9535-d241fe49cb3a","type":"BoxAnnotation"},{"id":"aed83193-5b8b-452b-95f2-2fa1ae009cdf","type":"PolyAnnotation"},{"id":"74d94b20-6991-4b34-9cc0-42cb4f04b47a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"680bc6e4-b804-4716-a9b8-92762711b557","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"01ab1a99-da3a-4b06-84f6-024edfa43e83","type":"DataRange1d"},"x_scale":{"id":"e6a97a65-db51-47a1-954b-d3d3907bf0c2","type":"LinearScale"},"y_range":{"id":"193e6a85-40d5-429a-a83a-995487296631","type":"DataRange1d"},"y_scale":{"id":"f9050165-b111-4378-bb14-bc7f369d5833","type":"LinearScale"}},"id":"df0db650-7cd9-4625-9ce0-f83da004d5cc","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"35ed1215-4880-4c74-babd-085c977c91a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"c34fc491-d038-4ca6-ae2d-51c980918737","type":"BasicTicker"}},"id":"4ea3baa4-72e0-4a84-b062-a265217c6e10","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"aed83193-5b8b-452b-95f2-2fa1ae009cdf","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"707d77cb-f33f-4a39-92ec-35aacaed61f8","type":"Row"}]},"id":"7e0a2a36-891c-4b50-88b2-e6eb271c3d1f","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f9082863-4737-4ac2-9619-68b5f05e6d35","type":"BoxSelectTool"},{"id":"8acdd097-79e8-427f-a194-55563d9802ad","type":"LassoSelectTool"},{"id":"8139bf50-251e-4e98-b1a6-ebaf3b4dba72","type":"HelpTool"}]},"id":"4920f431-49ca-41bf-a878-4ed48c116cd5","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"fc69b4fc-c0e4-4d49-adf5-68dbabecd26a","type":"PolyAnnotation"},{"attributes":{},"id":"f4921d03-8c6e-4634-90a3-431acd6c9ee2","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"27abb5f1-7e44-4df5-a1ee-1c73bee4d98c","type":"Circle"},{"attributes":{"formatter":{"id":"adfa1ad8-c86e-4683-9d4b-e0b0c4b3f1f0","type":"BasicTickFormatter"},"plot":{"id":"df0db650-7cd9-4625-9ce0-f83da004d5cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4921d03-8c6e-4634-90a3-431acd6c9ee2","type":"BasicTicker"}},"id":"d1aaa115-296a-4fd7-952f-3b2918a58e81","type":"LinearAxis"},{"attributes":{"callback":null},"id":"193e6a85-40d5-429a-a83a-995487296631","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"687cf15f-4093-45fd-8432-e60f3283c6ed","type":"Circle"},{"attributes":{"source":{"id":"5b223192-6488-4034-b4c8-c97d96e301f7","type":"ColumnDataSource"}},"id":"093bf6f3-b92f-4f51-beb5-2c3e078bd552","type":"CDSView"},{"attributes":{"plot":{"id":"df0db650-7cd9-4625-9ce0-f83da004d5cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4921d03-8c6e-4634-90a3-431acd6c9ee2","type":"BasicTicker"}},"id":"99c6c4fc-442b-47b3-9980-fd1c8ef7ee41","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"df0db650-7cd9-4625-9ce0-f83da004d5cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"8633628b-f6c1-4715-bfee-db5623cf80a7","type":"BasicTicker"}},"id":"a99f326d-f8c2-4b68-9885-06d60561e6fc","type":"Grid"},{"attributes":{},"id":"f9050165-b111-4378-bb14-bc7f369d5833","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"5b223192-6488-4034-b4c8-c97d96e301f7","type":"ColumnDataSource"},{"attributes":{},"id":"8139bf50-251e-4e98-b1a6-ebaf3b4dba72","type":"HelpTool"}],"root_ids":["b9a55062-184a-4d30-89e6-0acf1bc64d71"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"09edb340-8ef3-4991-868f-ab476d3b53d1","elementid":"e15ad173-9859-4868-a980-d890b3ef4184","modelid":"b9a55062-184a-4d30-89e6-0acf1bc64d71"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
