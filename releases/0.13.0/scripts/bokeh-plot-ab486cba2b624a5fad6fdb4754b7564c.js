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
      };var element = document.getElementById("4a76e31d-2447-4a4b-94e4-59c495337acb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4a76e31d-2447-4a4b-94e4-59c495337acb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"5c95d31a-60d3-48f1-aee1-da42ab4308bc":{"roots":{"references":[{"attributes":{},"id":"c6acb1a3-356b-4240-9677-63c3bbd3eada","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"48823f4b-45df-4c65-b441-09fa9032f1ca","type":"Toolbar"},{"attributes":{},"id":"762ecce5-17ce-4400-8782-ba38a6806f28","type":"BasicTickFormatter"},{"attributes":{},"id":"535b3a12-d5de-4b85-bb17-a440611abe19","type":"Selection"},{"attributes":{},"id":"5d292255-ac61-4478-8415-d461b4bcc91c","type":"CategoricalScale"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"3066ecc5-7770-4115-88b7-0cb5e8b0f878","type":"GlyphRenderer"}]},"id":"53ac8d9b-1c0d-47eb-a217-f889b3a9e71f","type":"LegendItem"},{"attributes":{"formatter":{"id":"c6acb1a3-356b-4240-9677-63c3bbd3eada","type":"CategoricalTickFormatter"},"plot":{"id":"46cc9725-4827-4ecb-9d78-10335baf8b0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4fbcd53-cd9f-46cd-a966-f8f1f337754f","type":"CategoricalTicker"}},"id":"fc13e592-1235-4c66-b4e9-0e3d5c85e2c8","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"065f9f64-ee0b-4472-bd7a-740481fd0e97","type":"Title"},{"attributes":{"callback":null,"end":9},"id":"8bcc7a27-e4c3-4588-b043-da1f9682c25f","type":"Range1d"},{"attributes":{},"id":"0f527372-4d5d-42ff-a0c0-c7ac92f85d11","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"46cc9725-4827-4ecb-9d78-10335baf8b0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4fbcd53-cd9f-46cd-a966-f8f1f337754f","type":"CategoricalTicker"}},"id":"cd3fd387-fbed-4bb5-93e4-b246e3dab994","type":"Grid"},{"attributes":{"below":[{"id":"fc13e592-1235-4c66-b4e9-0e3d5c85e2c8","type":"CategoricalAxis"}],"left":[{"id":"b1dc312f-6087-4dd8-adbf-cfdafb601850","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"fc13e592-1235-4c66-b4e9-0e3d5c85e2c8","type":"CategoricalAxis"},{"id":"cd3fd387-fbed-4bb5-93e4-b246e3dab994","type":"Grid"},{"id":"b1dc312f-6087-4dd8-adbf-cfdafb601850","type":"LinearAxis"},{"id":"3fde9336-c663-4f17-b126-39500822dada","type":"Grid"},{"id":"625add6e-616e-499f-87b2-98fc5356f055","type":"Legend"},{"id":"3066ecc5-7770-4115-88b7-0cb5e8b0f878","type":"GlyphRenderer"}],"title":{"id":"065f9f64-ee0b-4472-bd7a-740481fd0e97","type":"Title"},"toolbar":{"id":"48823f4b-45df-4c65-b441-09fa9032f1ca","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"73e04b32-1638-4bf4-9fe3-815f45ffb91e","type":"FactorRange"},"x_scale":{"id":"5d292255-ac61-4478-8415-d461b4bcc91c","type":"CategoricalScale"},"y_range":{"id":"8bcc7a27-e4c3-4588-b043-da1f9682c25f","type":"Range1d"},"y_scale":{"id":"5dd34df7-361e-446d-aaec-43aed77df55a","type":"LinearScale"}},"id":"46cc9725-4827-4ecb-9d78-10335baf8b0d","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"762ecce5-17ce-4400-8782-ba38a6806f28","type":"BasicTickFormatter"},"plot":{"id":"46cc9725-4827-4ecb-9d78-10335baf8b0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"4cdfccb5-0f72-4150-8da5-dbfd5ee13876","type":"BasicTicker"}},"id":"b1dc312f-6087-4dd8-adbf-cfdafb601850","type":"LinearAxis"},{"attributes":{},"id":"5dd34df7-361e-446d-aaec-43aed77df55a","type":"LinearScale"},{"attributes":{},"id":"d4fbcd53-cd9f-46cd-a966-f8f1f337754f","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"73e04b32-1638-4bf4-9fe3-815f45ffb91e","type":"FactorRange"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"7af3d0ec-6c42-4841-82f1-8400c49c8b68","type":"VBar"},{"attributes":{},"id":"4cdfccb5-0f72-4150-8da5-dbfd5ee13876","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"535b3a12-d5de-4b85-bb17-a440611abe19","type":"Selection"},"selection_policy":{"id":"0f527372-4d5d-42ff-a0c0-c7ac92f85d11","type":"UnionRenderers"}},"id":"ed76387b-4758-4308-8493-b032eeceed74","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"46cc9725-4827-4ecb-9d78-10335baf8b0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"4cdfccb5-0f72-4150-8da5-dbfd5ee13876","type":"BasicTicker"}},"id":"3fde9336-c663-4f17-b126-39500822dada","type":"Grid"},{"attributes":{"items":[{"id":"53ac8d9b-1c0d-47eb-a217-f889b3a9e71f","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"46cc9725-4827-4ecb-9d78-10335baf8b0d","subtype":"Figure","type":"Plot"}},"id":"625add6e-616e-499f-87b2-98fc5356f055","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e1147183-1404-403d-8291-9ac429d1dfc6","type":"VBar"},{"attributes":{"data_source":{"id":"ed76387b-4758-4308-8493-b032eeceed74","type":"ColumnDataSource"},"glyph":{"id":"7af3d0ec-6c42-4841-82f1-8400c49c8b68","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e1147183-1404-403d-8291-9ac429d1dfc6","type":"VBar"},"selection_glyph":null,"view":{"id":"48287a3e-ebda-4f6b-b3cb-77800f77f672","type":"CDSView"}},"id":"3066ecc5-7770-4115-88b7-0cb5e8b0f878","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ed76387b-4758-4308-8493-b032eeceed74","type":"ColumnDataSource"}},"id":"48287a3e-ebda-4f6b-b3cb-77800f77f672","type":"CDSView"}],"root_ids":["46cc9725-4827-4ecb-9d78-10335baf8b0d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5c95d31a-60d3-48f1-aee1-da42ab4308bc","roots":{"46cc9725-4827-4ecb-9d78-10335baf8b0d":"4a76e31d-2447-4a4b-94e4-59c495337acb"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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