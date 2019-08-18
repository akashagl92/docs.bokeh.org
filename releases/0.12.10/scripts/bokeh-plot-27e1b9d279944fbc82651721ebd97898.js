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
      };var element = document.getElementById("a7acbc9a-3a00-4c26-bfc6-6096e218b8f3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a7acbc9a-3a00-4c26-bfc6-6096e218b8f3' but no matching script tag was found. ")
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
                    var docs_json = {"eda5b132-c7c7-4185-9cf7-fdfedca8fbfa":{"roots":{"references":[{"attributes":{},"id":"c36c7b1f-495d-4abd-b03b-69bc84c97425","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"61eeedf6-0da0-419f-a0d7-c371586edc0c","type":"Title"},{"attributes":{},"id":"0a42ecec-edcd-43d7-880f-20bf806be0d3","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"afb4016e-1df3-482c-afcf-8ae4b261f146","type":"CategoricalAxis"}],"left":[{"id":"aa461231-919d-41ef-b619-c0f4af21b013","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"afb4016e-1df3-482c-afcf-8ae4b261f146","type":"CategoricalAxis"},{"id":"279fb283-69e0-4888-a8cc-1aa1e2cca7db","type":"Grid"},{"id":"aa461231-919d-41ef-b619-c0f4af21b013","type":"LinearAxis"},{"id":"ea075e3b-9276-461f-9f4a-79e70b1b8cfe","type":"Grid"},{"id":"fb53f81b-428f-4b03-bc2b-486c0bbbf281","type":"GlyphRenderer"}],"title":{"id":"61eeedf6-0da0-419f-a0d7-c371586edc0c","type":"Title"},"toolbar":{"id":"d3af4761-b1df-494a-abf1-e42c9598dfc5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f1fbc771-c563-4adc-a4ac-dd5e1cf2c87c","type":"FactorRange"},"x_scale":{"id":"c8449c11-f0b4-4f40-bef9-5263f55b1741","type":"CategoricalScale"},"y_range":{"id":"6b93e168-9870-4239-93fa-6eb52eff9048","type":"DataRange1d"},"y_scale":{"id":"28d527e4-e879-4527-ad18-0d751263b8cc","type":"LinearScale"}},"id":"4d22eaba-6516-4874-9ea9-bcb45814704f","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"59363f5f-c46c-4f2a-b7eb-e359f8ca87f9","type":"ColumnDataSource"},"glyph":{"id":"6bd9c4e8-3a9c-43ac-96c0-2dbbccc4e9b1","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ecc55588-7a88-48a3-b159-9f0e6848b36b","type":"VBar"},"selection_glyph":null,"view":{"id":"cf1801ee-70e1-489e-925d-1a1511fb08ec","type":"CDSView"}},"id":"fb53f81b-428f-4b03-bc2b-486c0bbbf281","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7b4897bc-7727-4c49-bb59-6324933aba99","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"4d22eaba-6516-4874-9ea9-bcb45814704f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a42ecec-edcd-43d7-880f-20bf806be0d3","type":"CategoricalTicker"}},"id":"afb4016e-1df3-482c-afcf-8ae4b261f146","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"ecc55588-7a88-48a3-b159-9f0e6848b36b","type":"VBar"},{"attributes":{"source":{"id":"59363f5f-c46c-4f2a-b7eb-e359f8ca87f9","type":"ColumnDataSource"}},"id":"cf1801ee-70e1-489e-925d-1a1511fb08ec","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"4d22eaba-6516-4874-9ea9-bcb45814704f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4d53dd3-1221-41bd-ae93-450e1fadfaa5","type":"BasicTicker"}},"id":"ea075e3b-9276-461f-9f4a-79e70b1b8cfe","type":"Grid"},{"attributes":{},"id":"28d527e4-e879-4527-ad18-0d751263b8cc","type":"LinearScale"},{"attributes":{},"id":"c4d53dd3-1221-41bd-ae93-450e1fadfaa5","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d3af4761-b1df-494a-abf1-e42c9598dfc5","type":"Toolbar"},{"attributes":{"formatter":{"id":"c36c7b1f-495d-4abd-b03b-69bc84c97425","type":"BasicTickFormatter"},"plot":{"id":"4d22eaba-6516-4874-9ea9-bcb45814704f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4d53dd3-1221-41bd-ae93-450e1fadfaa5","type":"BasicTicker"}},"id":"aa461231-919d-41ef-b619-c0f4af21b013","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"4d22eaba-6516-4874-9ea9-bcb45814704f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a42ecec-edcd-43d7-880f-20bf806be0d3","type":"CategoricalTicker"}},"id":"279fb283-69e0-4888-a8cc-1aa1e2cca7db","type":"Grid"},{"attributes":{},"id":"7b4897bc-7727-4c49-bb59-6324933aba99","type":"CategoricalTickFormatter"},{"attributes":{},"id":"c8449c11-f0b4-4f40-bef9-5263f55b1741","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"6bd9c4e8-3a9c-43ac-96c0-2dbbccc4e9b1","type":"VBar"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"f1fbc771-c563-4adc-a4ac-dd5e1cf2c87c","type":"FactorRange"},{"attributes":{"callback":null,"start":0},"id":"6b93e168-9870-4239-93fa-6eb52eff9048","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"59363f5f-c46c-4f2a-b7eb-e359f8ca87f9","type":"ColumnDataSource"}],"root_ids":["4d22eaba-6516-4874-9ea9-bcb45814704f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"eda5b132-c7c7-4185-9cf7-fdfedca8fbfa","elementid":"a7acbc9a-3a00-4c26-bfc6-6096e218b8f3","modelid":"4d22eaba-6516-4874-9ea9-bcb45814704f"}];
                
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
