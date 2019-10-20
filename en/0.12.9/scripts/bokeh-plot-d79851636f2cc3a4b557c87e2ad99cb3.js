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
      };var element = document.getElementById("a9eebe37-3df6-4649-9535-28365d518ea9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a9eebe37-3df6-4649-9535-28365d518ea9' but no matching script tag was found. ")
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
                    var docs_json = {"5401505b-bd0c-4cdb-a102-40297f1db179":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"21b9d7b2-e591-4e14-8e7b-87d52dfb9392","type":"PanTool"},{"id":"bfe33396-5e8c-4834-87ca-9f87af30ae89","type":"WheelZoomTool"},{"id":"541fc139-9060-4310-8ead-d853b1373456","type":"BoxZoomTool"},{"id":"2fae2af6-dbf0-4644-96fe-442bd72b1f82","type":"SaveTool"},{"id":"1f632500-a8de-4a4c-a6a3-2205ce1e73be","type":"ResetTool"},{"id":"de1b68b1-3b1a-4e0d-b765-3da19eaab25e","type":"HelpTool"}]},"id":"cbbae5e1-08f9-4ab9-a061-7b3a77e1dcc0","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"fbded4df-1a6d-4eb0-a177-1517b72b06f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"03416c0a-5cf4-4305-945d-a4db419f83f0","type":"CategoricalTicker"}},"id":"8783f9f7-04e6-4be2-80f7-99fc84142e5d","type":"Grid"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"1cec9bcc-0725-4fc1-a948-8e1b0834657c","type":"Title"},{"attributes":{},"id":"3f3c2096-5586-46d7-a04f-c846a63de560","type":"LinearScale"},{"attributes":{"overlay":{"id":"38c7224b-1a6b-4040-b400-d23f311c5288","type":"BoxAnnotation"}},"id":"541fc139-9060-4310-8ead-d853b1373456","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"fbded4df-1a6d-4eb0-a177-1517b72b06f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"038d0be0-a6c3-419f-aee0-145ce193c779","type":"BasicTicker"}},"id":"37485857-8634-4e69-be10-93cb4ff0a79f","type":"Grid"},{"attributes":{"data_source":{"id":"61410fd4-0d58-42c8-9ede-f5c82a4ee1d7","type":"ColumnDataSource"},"glyph":{"id":"96f08c41-ad25-49cc-bef3-86084fa55340","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ec0c35ea-804e-408f-9156-8dee7ccc8aba","type":"VBar"},"selection_glyph":null,"view":{"id":"c72dc0b9-fdfe-4e9a-b81f-0fe80594b5cc","type":"CDSView"}},"id":"02baec72-7d9a-4a57-9191-8cd27a094a41","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"61410fd4-0d58-42c8-9ede-f5c82a4ee1d7","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"bc4f9dba-c9ac-4b75-b9fa-65895c9ae3ae","type":"CategoricalTickFormatter"},"plot":{"id":"fbded4df-1a6d-4eb0-a177-1517b72b06f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"03416c0a-5cf4-4305-945d-a4db419f83f0","type":"CategoricalTicker"}},"id":"13d289b8-5cc6-47b7-9feb-28d33e010eb6","type":"CategoricalAxis"},{"attributes":{},"id":"de1b68b1-3b1a-4e0d-b765-3da19eaab25e","type":"HelpTool"},{"attributes":{},"id":"21b9d7b2-e591-4e14-8e7b-87d52dfb9392","type":"PanTool"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"c62a560c-2006-4506-bb94-404e528594c8","type":"CategoricalColorMapper"},{"attributes":{},"id":"45dc4dd7-579f-4d3f-aec0-06f7b1b12f28","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"61410fd4-0d58-42c8-9ede-f5c82a4ee1d7","type":"ColumnDataSource"}},"id":"c72dc0b9-fdfe-4e9a-b81f-0fe80594b5cc","type":"CDSView"},{"attributes":{},"id":"03416c0a-5cf4-4305-945d-a4db419f83f0","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"38c7224b-1a6b-4040-b400-d23f311c5288","type":"BoxAnnotation"},{"attributes":{},"id":"2fae2af6-dbf0-4644-96fe-442bd72b1f82","type":"SaveTool"},{"attributes":{},"id":"fc905e67-96b0-4235-98a6-5fe0d9cd3511","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"45dc4dd7-579f-4d3f-aec0-06f7b1b12f28","type":"BasicTickFormatter"},"plot":{"id":"fbded4df-1a6d-4eb0-a177-1517b72b06f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"038d0be0-a6c3-419f-aee0-145ce193c779","type":"BasicTicker"}},"id":"e605461f-c9c2-4d8d-a198-8f12baaa41db","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ec0c35ea-804e-408f-9156-8dee7ccc8aba","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"a1f8a351-d256-4ad2-bf1b-b9dbf179bf38","type":"FactorRange"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"02baec72-7d9a-4a57-9191-8cd27a094a41","type":"GlyphRenderer"}]},"id":"fee208f3-9bdf-457e-a6c3-7a9a844ed8bd","type":"LegendItem"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"c62a560c-2006-4506-bb94-404e528594c8","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"96f08c41-ad25-49cc-bef3-86084fa55340","type":"VBar"},{"attributes":{"below":[{"id":"13d289b8-5cc6-47b7-9feb-28d33e010eb6","type":"CategoricalAxis"}],"left":[{"id":"e605461f-c9c2-4d8d-a198-8f12baaa41db","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"13d289b8-5cc6-47b7-9feb-28d33e010eb6","type":"CategoricalAxis"},{"id":"8783f9f7-04e6-4be2-80f7-99fc84142e5d","type":"Grid"},{"id":"e605461f-c9c2-4d8d-a198-8f12baaa41db","type":"LinearAxis"},{"id":"37485857-8634-4e69-be10-93cb4ff0a79f","type":"Grid"},{"id":"38c7224b-1a6b-4040-b400-d23f311c5288","type":"BoxAnnotation"},{"id":"ce62acce-1b7d-47f3-a4b6-d9b3e7cdb621","type":"Legend"},{"id":"02baec72-7d9a-4a57-9191-8cd27a094a41","type":"GlyphRenderer"}],"title":{"id":"1cec9bcc-0725-4fc1-a948-8e1b0834657c","type":"Title"},"toolbar":{"id":"cbbae5e1-08f9-4ab9-a061-7b3a77e1dcc0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a1f8a351-d256-4ad2-bf1b-b9dbf179bf38","type":"FactorRange"},"x_scale":{"id":"fc905e67-96b0-4235-98a6-5fe0d9cd3511","type":"CategoricalScale"},"y_range":{"id":"4e61c6f4-747a-4921-b356-1932960dca6e","type":"DataRange1d"},"y_scale":{"id":"3f3c2096-5586-46d7-a04f-c846a63de560","type":"LinearScale"}},"id":"fbded4df-1a6d-4eb0-a177-1517b72b06f0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1f632500-a8de-4a4c-a6a3-2205ce1e73be","type":"ResetTool"},{"attributes":{},"id":"038d0be0-a6c3-419f-aee0-145ce193c779","type":"BasicTicker"},{"attributes":{},"id":"bc4f9dba-c9ac-4b75-b9fa-65895c9ae3ae","type":"CategoricalTickFormatter"},{"attributes":{"items":[{"id":"fee208f3-9bdf-457e-a6c3-7a9a844ed8bd","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"fbded4df-1a6d-4eb0-a177-1517b72b06f0","subtype":"Figure","type":"Plot"}},"id":"ce62acce-1b7d-47f3-a4b6-d9b3e7cdb621","type":"Legend"},{"attributes":{},"id":"bfe33396-5e8c-4834-87ca-9f87af30ae89","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":9,"start":0},"id":"4e61c6f4-747a-4921-b356-1932960dca6e","type":"DataRange1d"}],"root_ids":["fbded4df-1a6d-4eb0-a177-1517b72b06f0"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5401505b-bd0c-4cdb-a102-40297f1db179","elementid":"a9eebe37-3df6-4649-9535-28365d518ea9","modelid":"fbded4df-1a6d-4eb0-a177-1517b72b06f0"}];
                
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
