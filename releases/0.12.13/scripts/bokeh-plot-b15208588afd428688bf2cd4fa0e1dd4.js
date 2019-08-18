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
      };var element = document.getElementById("6b8f13d5-3016-4765-8819-900fba7ba305");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6b8f13d5-3016-4765-8819-900fba7ba305' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"6af246ff-37fa-4b35-a0d9-860be38760f4":{"roots":{"references":[{"attributes":{},"id":"dbf9d5a9-adda-4b46-afba-b80ba7d23d22","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"e3a3d521-9020-4550-a6d6-ca587f087e32","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"36251107-5c22-4f52-a0ca-e4b35b75e4da","type":"Toolbar"},{"attributes":{"source":{"id":"2b52a040-d523-490b-bcb5-3876c01c5b00","type":"ColumnDataSource"}},"id":"2cf4d1f2-04ed-4c12-b1ff-7e6c6f670c6c","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"69bf9d5b-53df-4b6e-86a3-2c30f2136e15","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"806754fa-9e4e-474f-9b71-9281a1b6f6c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1de600b8-3c1b-4b43-b557-c9ee93196395","type":"CategoricalTicker"}},"id":"0f903822-82c3-4f9c-b9ba-319d2fd0be4c","type":"Grid"},{"attributes":{},"id":"1de600b8-3c1b-4b43-b557-c9ee93196395","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"095e987e-2398-4ed3-9b13-cc7333180424","type":"VBar"},{"attributes":{"below":[{"id":"51599cfd-4e0a-4bcc-90b7-61226509df56","type":"CategoricalAxis"}],"left":[{"id":"f7fb0049-94c3-4c2e-8999-a6ad7c943c52","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"51599cfd-4e0a-4bcc-90b7-61226509df56","type":"CategoricalAxis"},{"id":"0f903822-82c3-4f9c-b9ba-319d2fd0be4c","type":"Grid"},{"id":"f7fb0049-94c3-4c2e-8999-a6ad7c943c52","type":"LinearAxis"},{"id":"6abc92d3-cd0c-4a01-a276-a8c16c1189f7","type":"Grid"},{"id":"05a38c68-4993-4076-b990-6b4314e19bb8","type":"GlyphRenderer"}],"title":{"id":"e3a3d521-9020-4550-a6d6-ca587f087e32","type":"Title"},"toolbar":{"id":"36251107-5c22-4f52-a0ca-e4b35b75e4da","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ab8bcf55-3762-4d43-8f77-9301136b7ea6","type":"FactorRange"},"x_scale":{"id":"dbf9d5a9-adda-4b46-afba-b80ba7d23d22","type":"CategoricalScale"},"y_range":{"id":"16d1216d-cace-42ff-9f0c-3b1444c36379","type":"DataRange1d"},"y_scale":{"id":"2879bbd6-3b68-415e-a2f8-f4c9557780c0","type":"LinearScale"}},"id":"806754fa-9e4e-474f-9b71-9281a1b6f6c8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3e8c54ca-e408-4ffd-84f7-1f181c51a776","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"806754fa-9e4e-474f-9b71-9281a1b6f6c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e8c54ca-e408-4ffd-84f7-1f181c51a776","type":"BasicTicker"}},"id":"6abc92d3-cd0c-4a01-a276-a8c16c1189f7","type":"Grid"},{"attributes":{"formatter":{"id":"7a51355f-3f8b-4e0d-888c-f82df8b72896","type":"BasicTickFormatter"},"plot":{"id":"806754fa-9e4e-474f-9b71-9281a1b6f6c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e8c54ca-e408-4ffd-84f7-1f181c51a776","type":"BasicTicker"}},"id":"f7fb0049-94c3-4c2e-8999-a6ad7c943c52","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"2b52a040-d523-490b-bcb5-3876c01c5b00","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2b52a040-d523-490b-bcb5-3876c01c5b00","type":"ColumnDataSource"},"glyph":{"id":"095e987e-2398-4ed3-9b13-cc7333180424","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69bf9d5b-53df-4b6e-86a3-2c30f2136e15","type":"VBar"},"selection_glyph":null,"view":{"id":"2cf4d1f2-04ed-4c12-b1ff-7e6c6f670c6c","type":"CDSView"}},"id":"05a38c68-4993-4076-b990-6b4314e19bb8","type":"GlyphRenderer"},{"attributes":{},"id":"2879bbd6-3b68-415e-a2f8-f4c9557780c0","type":"LinearScale"},{"attributes":{"callback":null,"start":0},"id":"16d1216d-cace-42ff-9f0c-3b1444c36379","type":"DataRange1d"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"ab8bcf55-3762-4d43-8f77-9301136b7ea6","type":"FactorRange"},{"attributes":{"formatter":{"id":"a65bb1ec-3466-4139-80e1-c753749ee9ae","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"806754fa-9e4e-474f-9b71-9281a1b6f6c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1de600b8-3c1b-4b43-b557-c9ee93196395","type":"CategoricalTicker"}},"id":"51599cfd-4e0a-4bcc-90b7-61226509df56","type":"CategoricalAxis"},{"attributes":{},"id":"7a51355f-3f8b-4e0d-888c-f82df8b72896","type":"BasicTickFormatter"},{"attributes":{},"id":"a65bb1ec-3466-4139-80e1-c753749ee9ae","type":"CategoricalTickFormatter"}],"root_ids":["806754fa-9e4e-474f-9b71-9281a1b6f6c8"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"6af246ff-37fa-4b35-a0d9-860be38760f4","elementid":"6b8f13d5-3016-4765-8819-900fba7ba305","modelid":"806754fa-9e4e-474f-9b71-9281a1b6f6c8"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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