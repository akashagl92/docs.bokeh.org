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
      };var element = document.getElementById("3b2ffb49-e0ca-4334-a0b4-0d7139aa443e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b2ffb49-e0ca-4334-a0b4-0d7139aa443e' but no matching script tag was found. ")
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
                    var docs_json = {"cbe07d3a-f461-4634-bdaf-3ee54f2e1d1e":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"572178d7-8fb3-4545-822d-4306b5b1d8a4","type":"VBar"},{"attributes":{"below":[{"id":"9e306d02-93ce-4274-8199-0b736ee4aa6e","type":"CategoricalAxis"}],"left":[{"id":"ada13616-328d-4307-97b9-292d546b4041","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"9e306d02-93ce-4274-8199-0b736ee4aa6e","type":"CategoricalAxis"},{"id":"15e38c6d-1adc-4906-b442-2cf3731adfac","type":"Grid"},{"id":"ada13616-328d-4307-97b9-292d546b4041","type":"LinearAxis"},{"id":"83ce488c-5476-4508-b8be-f9539be979ec","type":"Grid"},{"id":"723a8163-e695-40ca-a038-aafd1f413ae9","type":"BoxAnnotation"},{"id":"4a42bb14-ed9e-46c0-9535-52645addb14a","type":"Legend"},{"id":"d349a5a6-ec88-4cc5-8ef7-50d8658d215e","type":"GlyphRenderer"}],"title":{"id":"1c5e5444-f2f2-42da-b9d7-1d36e4029104","type":"Title"},"toolbar":{"id":"57e69664-24aa-4d0e-bfa8-38edea09b441","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b2d89781-6a6f-434e-b5f4-abbf0b69eeaa","type":"FactorRange"},"x_scale":{"id":"446ffc44-74b4-48d1-a5fe-aff9ab8ea3ee","type":"CategoricalScale"},"y_range":{"id":"c0543055-294f-481a-a699-1b3c0a43c4fe","type":"DataRange1d"},"y_scale":{"id":"5c115a99-fdf3-472e-b849-ff9edc0d6c28","type":"LinearScale"}},"id":"13ab079b-8a8e-4d51-b435-313c747490d7","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"13ab079b-8a8e-4d51-b435-313c747490d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6b29ae3-ebe3-4ce8-999a-12899c98cde8","type":"BasicTicker"}},"id":"83ce488c-5476-4508-b8be-f9539be979ec","type":"Grid"},{"attributes":{"data_source":{"id":"99ae078d-1968-45cb-8bd1-e13a37b4df04","type":"ColumnDataSource"},"glyph":{"id":"4dde9f52-5090-4b6e-9a1f-d3afaacb924e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"572178d7-8fb3-4545-822d-4306b5b1d8a4","type":"VBar"},"selection_glyph":null,"view":{"id":"c8042a3c-513b-41f4-9fc7-e5971fd0e527","type":"CDSView"}},"id":"d349a5a6-ec88-4cc5-8ef7-50d8658d215e","type":"GlyphRenderer"},{"attributes":{},"id":"70cfaf18-0764-44b7-938f-51b9628a2fa8","type":"HelpTool"},{"attributes":{},"id":"5c115a99-fdf3-472e-b849-ff9edc0d6c28","type":"LinearScale"},{"attributes":{},"id":"9ff3b013-be88-453d-a600-517ed6f5df0c","type":"CategoricalTicker"},{"attributes":{},"id":"7b07e82e-7f9f-4660-9a31-daf5366727c7","type":"PanTool"},{"attributes":{},"id":"a6b29ae3-ebe3-4ce8-999a-12899c98cde8","type":"BasicTicker"},{"attributes":{"callback":null,"end":9,"start":0},"id":"c0543055-294f-481a-a699-1b3c0a43c4fe","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"99ae078d-1968-45cb-8bd1-e13a37b4df04","type":"ColumnDataSource"},{"attributes":{},"id":"f8904a7a-ba61-4013-8d26-05f48d6fae81","type":"SaveTool"},{"attributes":{"formatter":{"id":"ec15934d-543e-4f76-bc03-a771782b63db","type":"CategoricalTickFormatter"},"plot":{"id":"13ab079b-8a8e-4d51-b435-313c747490d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ff3b013-be88-453d-a600-517ed6f5df0c","type":"CategoricalTicker"}},"id":"9e306d02-93ce-4274-8199-0b736ee4aa6e","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"13ab079b-8a8e-4d51-b435-313c747490d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ff3b013-be88-453d-a600-517ed6f5df0c","type":"CategoricalTicker"}},"id":"15e38c6d-1adc-4906-b442-2cf3731adfac","type":"Grid"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"b2d89781-6a6f-434e-b5f4-abbf0b69eeaa","type":"FactorRange"},{"attributes":{"formatter":{"id":"831346f3-2e8d-4f47-aa49-ec37a506cce7","type":"BasicTickFormatter"},"plot":{"id":"13ab079b-8a8e-4d51-b435-313c747490d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6b29ae3-ebe3-4ce8-999a-12899c98cde8","type":"BasicTicker"}},"id":"ada13616-328d-4307-97b9-292d546b4041","type":"LinearAxis"},{"attributes":{},"id":"845f7c17-3a37-4012-a2bf-81fc04344df8","type":"WheelZoomTool"},{"attributes":{},"id":"446ffc44-74b4-48d1-a5fe-aff9ab8ea3ee","type":"CategoricalScale"},{"attributes":{},"id":"831346f3-2e8d-4f47-aa49-ec37a506cce7","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"723a8163-e695-40ca-a038-aafd1f413ae9","type":"BoxAnnotation"}},"id":"5d85d6a2-a2ad-4567-b6cd-992e34dd2d5f","type":"BoxZoomTool"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"27742c7f-b612-4f14-9415-8dfc515228d3","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"4dde9f52-5090-4b6e-9a1f-d3afaacb924e","type":"VBar"},{"attributes":{},"id":"a6a30436-8b06-4ee0-9c42-bf2007fa827d","type":"ResetTool"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"1c5e5444-f2f2-42da-b9d7-1d36e4029104","type":"Title"},{"attributes":{"source":{"id":"99ae078d-1968-45cb-8bd1-e13a37b4df04","type":"ColumnDataSource"}},"id":"c8042a3c-513b-41f4-9fc7-e5971fd0e527","type":"CDSView"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"d349a5a6-ec88-4cc5-8ef7-50d8658d215e","type":"GlyphRenderer"}]},"id":"6ef67518-a0ca-4a0a-80a0-c69752941c6c","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"723a8163-e695-40ca-a038-aafd1f413ae9","type":"BoxAnnotation"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"27742c7f-b612-4f14-9415-8dfc515228d3","type":"CategoricalColorMapper"},{"attributes":{},"id":"ec15934d-543e-4f76-bc03-a771782b63db","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7b07e82e-7f9f-4660-9a31-daf5366727c7","type":"PanTool"},{"id":"845f7c17-3a37-4012-a2bf-81fc04344df8","type":"WheelZoomTool"},{"id":"5d85d6a2-a2ad-4567-b6cd-992e34dd2d5f","type":"BoxZoomTool"},{"id":"f8904a7a-ba61-4013-8d26-05f48d6fae81","type":"SaveTool"},{"id":"a6a30436-8b06-4ee0-9c42-bf2007fa827d","type":"ResetTool"},{"id":"70cfaf18-0764-44b7-938f-51b9628a2fa8","type":"HelpTool"}]},"id":"57e69664-24aa-4d0e-bfa8-38edea09b441","type":"Toolbar"},{"attributes":{"items":[{"id":"6ef67518-a0ca-4a0a-80a0-c69752941c6c","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"13ab079b-8a8e-4d51-b435-313c747490d7","subtype":"Figure","type":"Plot"}},"id":"4a42bb14-ed9e-46c0-9535-52645addb14a","type":"Legend"}],"root_ids":["13ab079b-8a8e-4d51-b435-313c747490d7"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"cbe07d3a-f461-4634-bdaf-3ee54f2e1d1e","elementid":"3b2ffb49-e0ca-4334-a0b4-0d7139aa443e","modelid":"13ab079b-8a8e-4d51-b435-313c747490d7"}];
                
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
