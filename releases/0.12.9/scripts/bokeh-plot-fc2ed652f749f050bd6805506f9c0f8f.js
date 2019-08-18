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
      };var element = document.getElementById("d675dcdd-abb3-4fa3-abac-c86a8dc545c1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd675dcdd-abb3-4fa3-abac-c86a8dc545c1' but no matching script tag was found. ")
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
                    var docs_json = {"f1fbdcbd-811e-4ef4-a858-6b84a56fedca":{"roots":{"references":[{"attributes":{"fields":[]},"id":"c8446906-2837-453f-b3db-624a3fb87848","type":"Stack"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"16ff3987-393d-4be6-a949-7b224350bab2","type":"GlyphRenderer"}]},"id":"60d33a85-9f71-46ed-bd85-95a658d7fa01","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"24f4e607-7c09-42f1-a49f-fefef2d2cb94","subtype":"Figure","type":"Plot"},"ticker":{"id":"661b5da3-914c-48b7-926d-a405d67d96ca","type":"BasicTicker"}},"id":"78355470-990d-43ee-a90d-5a962d98373e","type":"Grid"},{"attributes":{},"id":"661b5da3-914c-48b7-926d-a405d67d96ca","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fb9fedbe-9de3-4a56-a970-25d0860d6563","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"24f4e607-7c09-42f1-a49f-fefef2d2cb94","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed97c316-6650-4f91-b1b6-bbde7732d9a6","type":"CategoricalTicker"}},"id":"9bac1d95-5c59-489b-8f3b-b724d6f47dd8","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"f65df54a-7054-42bc-b8af-572d15777e14","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"24f4e607-7c09-42f1-a49f-fefef2d2cb94","subtype":"Figure","type":"Plot"},"ticker":{"id":"661b5da3-914c-48b7-926d-a405d67d96ca","type":"BasicTicker"}},"id":"28a657bf-39ad-4811-968e-16163c59e6a7","type":"LinearAxis"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"69dc0063-d324-46d6-bf78-48bfb4e7435f","type":"GlyphRenderer"}]},"id":"4c22f96e-3ea6-452e-a197-64abcc2ce70c","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"c4ee8fd2-76e2-4b37-9b0d-0d82bbd7b752","type":"Stack"},{"attributes":{},"id":"38bdaf28-6a44-4d8b-872c-74b13600c2c2","type":"LinearScale"},{"attributes":{"fields":["2015","2016"]},"id":"ffb1a099-9ea7-4bce-9c5b-a3389eca21ab","type":"Stack"},{"attributes":{},"id":"fb9fedbe-9de3-4a56-a970-25d0860d6563","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"c8446906-2837-453f-b3db-624a3fb87848","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"c4ee8fd2-76e2-4b37-9b0d-0d82bbd7b752","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e2118044-0a50-4b8e-9c72-dc6e0ada055d","type":"VBar"},{"attributes":{"source":{"id":"114b7bbf-249b-4802-be18-c217a8052865","type":"ColumnDataSource"}},"id":"fb185432-dd84-4be9-bc71-fdd89267db8c","type":"CDSView"},{"attributes":{"data_source":{"id":"114b7bbf-249b-4802-be18-c217a8052865","type":"ColumnDataSource"},"glyph":{"id":"e2118044-0a50-4b8e-9c72-dc6e0ada055d","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15c647a8-79a7-46e4-a0ac-230f885aa343","type":"VBar"},"selection_glyph":null,"view":{"id":"ba7f1896-6f48-466a-b871-31697f4cc549","type":"CDSView"}},"id":"69dc0063-d324-46d6-bf78-48bfb4e7435f","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"ffb1a099-9ea7-4bce-9c5b-a3389eca21ab","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"e1768feb-e8ae-496a-985f-62c1b14bb317","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"b797c096-4722-418a-ac09-0bafee1e3bba","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"97cde8ef-9658-460c-a515-d42cccdcf3cd","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"8e185c36-24b8-4ee6-882d-d145aeb99920","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"18f24e56-9436-4fa1-8968-8e7188179dae","type":"VBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"e1768feb-e8ae-496a-985f-62c1b14bb317","type":"Stack"},{"attributes":{"below":[{"id":"9bac1d95-5c59-489b-8f3b-b724d6f47dd8","type":"CategoricalAxis"}],"left":[{"id":"28a657bf-39ad-4811-968e-16163c59e6a7","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"9bac1d95-5c59-489b-8f3b-b724d6f47dd8","type":"CategoricalAxis"},{"id":"c747807a-267e-4d82-af7f-6d5545cf59a4","type":"Grid"},{"id":"28a657bf-39ad-4811-968e-16163c59e6a7","type":"LinearAxis"},{"id":"78355470-990d-43ee-a90d-5a962d98373e","type":"Grid"},{"id":"574dded4-6ca5-4be9-9b05-5df503781999","type":"Legend"},{"id":"69dc0063-d324-46d6-bf78-48bfb4e7435f","type":"GlyphRenderer"},{"id":"16ff3987-393d-4be6-a949-7b224350bab2","type":"GlyphRenderer"},{"id":"5198f9ad-cafa-4526-88ce-a39bc41d53b9","type":"GlyphRenderer"}],"title":{"id":"4c6b5d93-1c3d-4321-a731-dbab5115a881","type":"Title"},"toolbar":{"id":"68c892a0-0ddc-4a68-8462-db2ec1d3d0a8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7a612498-8903-4bfb-a04c-886cc506e25e","type":"FactorRange"},"x_scale":{"id":"57ab7a52-534a-4532-be7b-89e17b00b7d3","type":"CategoricalScale"},"y_range":{"id":"a4a8ad20-464b-4e6a-b690-7031cc0a894c","type":"DataRange1d"},"y_scale":{"id":"38bdaf28-6a44-4d8b-872c-74b13600c2c2","type":"LinearScale"}},"id":"24f4e607-7c09-42f1-a49f-fefef2d2cb94","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"114b7bbf-249b-4802-be18-c217a8052865","type":"ColumnDataSource"}},"id":"ba7f1896-6f48-466a-b871-31697f4cc549","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"8e185c36-24b8-4ee6-882d-d145aeb99920","type":"Stack"},{"attributes":{},"id":"57ab7a52-534a-4532-be7b-89e17b00b7d3","type":"CategoricalScale"},{"attributes":{"items":[{"id":"4c22f96e-3ea6-452e-a197-64abcc2ce70c","type":"LegendItem"},{"id":"60d33a85-9f71-46ed-bd85-95a658d7fa01","type":"LegendItem"},{"id":"ae3447c3-1afe-45de-a81f-b1868aaa30e1","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"24f4e607-7c09-42f1-a49f-fefef2d2cb94","subtype":"Figure","type":"Plot"}},"id":"574dded4-6ca5-4be9-9b05-5df503781999","type":"Legend"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"7a612498-8903-4bfb-a04c-886cc506e25e","type":"FactorRange"},{"attributes":{"fields":["2015"]},"id":"97cde8ef-9658-460c-a515-d42cccdcf3cd","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"c8446906-2837-453f-b3db-624a3fb87848","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"c4ee8fd2-76e2-4b37-9b0d-0d82bbd7b752","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"15c647a8-79a7-46e4-a0ac-230f885aa343","type":"VBar"},{"attributes":{},"id":"f65df54a-7054-42bc-b8af-572d15777e14","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"97cde8ef-9658-460c-a515-d42cccdcf3cd","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"8e185c36-24b8-4ee6-882d-d145aeb99920","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2b3d5862-ab42-482a-a592-f096b9c8f721","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"24f4e607-7c09-42f1-a49f-fefef2d2cb94","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed97c316-6650-4f91-b1b6-bbde7732d9a6","type":"CategoricalTicker"}},"id":"c747807a-267e-4d82-af7f-6d5545cf59a4","type":"Grid"},{"attributes":{"callback":null,"start":0},"id":"a4a8ad20-464b-4e6a-b690-7031cc0a894c","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"ffb1a099-9ea7-4bce-9c5b-a3389eca21ab","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"e1768feb-e8ae-496a-985f-62c1b14bb317","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"d873c058-b74d-481b-999b-74afc4c27f63","type":"VBar"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"114b7bbf-249b-4802-be18-c217a8052865","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"114b7bbf-249b-4802-be18-c217a8052865","type":"ColumnDataSource"},"glyph":{"id":"18f24e56-9436-4fa1-8968-8e7188179dae","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2b3d5862-ab42-482a-a592-f096b9c8f721","type":"VBar"},"selection_glyph":null,"view":{"id":"4ef7a2db-7110-4553-87ae-d4cdae75a8f2","type":"CDSView"}},"id":"16ff3987-393d-4be6-a949-7b224350bab2","type":"GlyphRenderer"},{"attributes":{"source":{"id":"114b7bbf-249b-4802-be18-c217a8052865","type":"ColumnDataSource"}},"id":"4ef7a2db-7110-4553-87ae-d4cdae75a8f2","type":"CDSView"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"5198f9ad-cafa-4526-88ce-a39bc41d53b9","type":"GlyphRenderer"}]},"id":"ae3447c3-1afe-45de-a81f-b1868aaa30e1","type":"LegendItem"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"4c6b5d93-1c3d-4321-a731-dbab5115a881","type":"Title"},{"attributes":{},"id":"ed97c316-6650-4f91-b1b6-bbde7732d9a6","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"114b7bbf-249b-4802-be18-c217a8052865","type":"ColumnDataSource"},"glyph":{"id":"b797c096-4722-418a-ac09-0bafee1e3bba","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d873c058-b74d-481b-999b-74afc4c27f63","type":"VBar"},"selection_glyph":null,"view":{"id":"fb185432-dd84-4be9-bc71-fdd89267db8c","type":"CDSView"}},"id":"5198f9ad-cafa-4526-88ce-a39bc41d53b9","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"68c892a0-0ddc-4a68-8462-db2ec1d3d0a8","type":"Toolbar"}],"root_ids":["24f4e607-7c09-42f1-a49f-fefef2d2cb94"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"f1fbdcbd-811e-4ef4-a858-6b84a56fedca","elementid":"d675dcdd-abb3-4fa3-abac-c86a8dc545c1","modelid":"24f4e607-7c09-42f1-a49f-fefef2d2cb94"}];
                
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
