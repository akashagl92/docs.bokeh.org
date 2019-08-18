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
      };var element = document.getElementById("4ee02a0a-b679-4a79-b19d-0d9101b2f051");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4ee02a0a-b679-4a79-b19d-0d9101b2f051' but no matching script tag was found. ")
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
                    var docs_json = {"b3d7e88f-68b0-46cf-9aa1-d476c3d34618":{"roots":{"references":[{"attributes":{"callback":null,"start":0},"id":"79d11852-17aa-42b8-904b-3d51d5f1be86","type":"DataRange1d"},{"attributes":{},"id":"ab138375-1275-4bc2-aade-95f95fbee4a1","type":"LinearScale"},{"attributes":{"source":{"id":"5accba18-d17f-486e-b52e-93db623b3a18","type":"ColumnDataSource"}},"id":"9aab1fcb-52e5-41a2-a461-e6cf121b833b","type":"CDSView"},{"attributes":{"formatter":{"id":"abb650e6-2813-4784-9a32-aa6b6f785d1f","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"0946dc2d-4ec1-4952-9480-d47a023015e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"29e750d8-b8f8-42ca-bfc4-c797bbdfb0a6","type":"CategoricalTicker"}},"id":"c79726ac-524e-4f62-9430-4c58856e193f","type":"CategoricalAxis"},{"attributes":{},"id":"abb650e6-2813-4784-9a32-aa6b6f785d1f","type":"CategoricalTickFormatter"},{"attributes":{},"id":"88d433fb-0851-4a94-8cce-07002fff49e9","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"c79726ac-524e-4f62-9430-4c58856e193f","type":"CategoricalAxis"}],"left":[{"id":"63943e87-24ed-4582-bc6e-ab63227ef65a","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"c79726ac-524e-4f62-9430-4c58856e193f","type":"CategoricalAxis"},{"id":"e10ce603-6426-46e4-90b5-d55bbb8d1927","type":"Grid"},{"id":"63943e87-24ed-4582-bc6e-ab63227ef65a","type":"LinearAxis"},{"id":"9623fc4b-311f-4e6e-843e-c34762f8e8b4","type":"Grid"},{"id":"20a2b5cf-53b1-4b8c-a8db-e2692147fa95","type":"GlyphRenderer"}],"title":{"id":"098067b5-6b91-4fc3-8e1c-b879d96fedaa","type":"Title"},"toolbar":{"id":"93277d32-cc13-4ecb-bf51-69e626b24c3e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20e1b7f4-3a19-47af-ad84-845b38e7815e","type":"FactorRange"},"x_scale":{"id":"556b9f98-36b2-42f9-9a83-2745af31db78","type":"CategoricalScale"},"y_range":{"id":"79d11852-17aa-42b8-904b-3d51d5f1be86","type":"DataRange1d"},"y_scale":{"id":"ab138375-1275-4bc2-aade-95f95fbee4a1","type":"LinearScale"}},"id":"0946dc2d-4ec1-4952-9480-d47a023015e8","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"88d433fb-0851-4a94-8cce-07002fff49e9","type":"BasicTickFormatter"},"plot":{"id":"0946dc2d-4ec1-4952-9480-d47a023015e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cebe3d5-65b9-4570-8bf8-3fd6e81784bd","type":"BasicTicker"}},"id":"63943e87-24ed-4582-bc6e-ab63227ef65a","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"098067b5-6b91-4fc3-8e1c-b879d96fedaa","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"93277d32-cc13-4ecb-bf51-69e626b24c3e","type":"Toolbar"},{"attributes":{},"id":"29e750d8-b8f8-42ca-bfc4-c797bbdfb0a6","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"0946dc2d-4ec1-4952-9480-d47a023015e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cebe3d5-65b9-4570-8bf8-3fd6e81784bd","type":"BasicTicker"}},"id":"9623fc4b-311f-4e6e-843e-c34762f8e8b4","type":"Grid"},{"attributes":{},"id":"556b9f98-36b2-42f9-9a83-2745af31db78","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"5accba18-d17f-486e-b52e-93db623b3a18","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5accba18-d17f-486e-b52e-93db623b3a18","type":"ColumnDataSource"},"glyph":{"id":"009b81b9-bd79-47ef-b94c-d216bfb067f7","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46a53832-510b-4166-8ce3-be2184729cc3","type":"VBar"},"selection_glyph":null,"view":{"id":"9aab1fcb-52e5-41a2-a461-e6cf121b833b","type":"CDSView"}},"id":"20a2b5cf-53b1-4b8c-a8db-e2692147fa95","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"20e1b7f4-3a19-47af-ad84-845b38e7815e","type":"FactorRange"},{"attributes":{},"id":"8cebe3d5-65b9-4570-8bf8-3fd6e81784bd","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"46a53832-510b-4166-8ce3-be2184729cc3","type":"VBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"009b81b9-bd79-47ef-b94c-d216bfb067f7","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0946dc2d-4ec1-4952-9480-d47a023015e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"29e750d8-b8f8-42ca-bfc4-c797bbdfb0a6","type":"CategoricalTicker"}},"id":"e10ce603-6426-46e4-90b5-d55bbb8d1927","type":"Grid"}],"root_ids":["0946dc2d-4ec1-4952-9480-d47a023015e8"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"b3d7e88f-68b0-46cf-9aa1-d476c3d34618","elementid":"4ee02a0a-b679-4a79-b19d-0d9101b2f051","modelid":"0946dc2d-4ec1-4952-9480-d47a023015e8"}];
                
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
