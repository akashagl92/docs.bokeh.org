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
      };var element = document.getElementById("4adc0e6d-860b-4f86-be40-527e068da097");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4adc0e6d-860b-4f86-be40-527e068da097' but no matching script tag was found. ")
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
                    var docs_json = {"111f63c7-78dc-4b8c-adfb-dc768d7ed717":{"roots":{"references":[{"attributes":{},"id":"e2a80775-a6ab-4282-9c98-466b42f24cf8","type":"WheelZoomTool"},{"attributes":{},"id":"e3578e20-9e70-422b-8a03-351c4752eda0","type":"LinearScale"},{"attributes":{"plot":null,"text":"Left Title"},"id":"07c57aff-59ca-4f14-a092-baaeaa6b3afa","type":"Title"},{"attributes":{},"id":"2db721b8-97d7-4ce4-9ea4-dfdde52e897d","type":"BasicTicker"},{"attributes":{},"id":"ed80c6ea-412c-406f-98f2-63f75671f1d9","type":"SaveTool"},{"attributes":{},"id":"326ae0eb-afd8-4fb1-836c-5aa897ac1557","type":"HelpTool"},{"attributes":{"data_source":{"id":"fd0fc6ba-aa1a-4b52-a188-e6e51e39df11","type":"ColumnDataSource"},"glyph":{"id":"655af4c7-c7aa-4c67-ac16-43afd91968a9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17161de9-fe9a-4291-b5d8-3eb11d306132","type":"Circle"},"selection_glyph":null,"view":{"id":"016c7483-e449-4b7f-a5e6-e12c722f81bb","type":"CDSView"}},"id":"d2d6dd4f-1e74-4d9d-99ad-2e3dbaecde16","type":"GlyphRenderer"},{"attributes":{},"id":"4bb6fbe8-9d4b-4fd5-ab54-69867f2003d5","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"fd0fc6ba-aa1a-4b52-a188-e6e51e39df11","type":"ColumnDataSource"},{"attributes":{},"id":"fffca205-e368-497c-83dc-97447206e808","type":"PanTool"},{"attributes":{"below":[{"id":"bef60b08-b089-444d-bc04-4b5f8ce4f9ed","type":"LinearAxis"}],"left":[{"id":"e7c283b6-b786-4900-ae08-da0b5725a2a7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bef60b08-b089-444d-bc04-4b5f8ce4f9ed","type":"LinearAxis"},{"id":"f36b34bc-68cd-4502-9f8d-6ae45bf33325","type":"Grid"},{"id":"e7c283b6-b786-4900-ae08-da0b5725a2a7","type":"LinearAxis"},{"id":"cd04f88d-e053-42c4-a95b-ba8047f79b94","type":"Grid"},{"id":"dbf57fc0-45d6-445d-95e0-2b374bf057d0","type":"BoxAnnotation"},{"id":"d2d6dd4f-1e74-4d9d-99ad-2e3dbaecde16","type":"GlyphRenderer"}],"title":{"id":"07c57aff-59ca-4f14-a092-baaeaa6b3afa","type":"Title"},"title_location":"left","toolbar":{"id":"d4448270-4713-455b-98be-ce9f06589079","type":"Toolbar"},"x_range":{"id":"4b589ece-2ff7-4293-a173-588cd6292341","type":"DataRange1d"},"x_scale":{"id":"5f9f6e76-2b03-4b4f-8937-09ce34be9584","type":"LinearScale"},"y_range":{"id":"773bffc1-023d-4423-9a08-ad821ad8fc66","type":"DataRange1d"},"y_scale":{"id":"e3578e20-9e70-422b-8a03-351c4752eda0","type":"LinearScale"}},"id":"6397bab9-e80c-4f17-874e-4cb5e5c65574","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"4b589ece-2ff7-4293-a173-588cd6292341","type":"DataRange1d"},{"attributes":{"source":{"id":"fd0fc6ba-aa1a-4b52-a188-e6e51e39df11","type":"ColumnDataSource"}},"id":"016c7483-e449-4b7f-a5e6-e12c722f81bb","type":"CDSView"},{"attributes":{},"id":"f5874a6d-462c-4706-80fb-0eafbf37502e","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"655af4c7-c7aa-4c67-ac16-43afd91968a9","type":"Circle"},{"attributes":{},"id":"d2b0cc5a-6d8b-4372-8d52-fa971469ca28","type":"ResetTool"},{"attributes":{},"id":"5f9f6e76-2b03-4b4f-8937-09ce34be9584","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dbf57fc0-45d6-445d-95e0-2b374bf057d0","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fffca205-e368-497c-83dc-97447206e808","type":"PanTool"},{"id":"e2a80775-a6ab-4282-9c98-466b42f24cf8","type":"WheelZoomTool"},{"id":"8df216d7-c9ba-4d42-88d7-1f3be0226716","type":"BoxZoomTool"},{"id":"ed80c6ea-412c-406f-98f2-63f75671f1d9","type":"SaveTool"},{"id":"d2b0cc5a-6d8b-4372-8d52-fa971469ca28","type":"ResetTool"},{"id":"326ae0eb-afd8-4fb1-836c-5aa897ac1557","type":"HelpTool"}]},"id":"d4448270-4713-455b-98be-ce9f06589079","type":"Toolbar"},{"attributes":{"formatter":{"id":"4bb6fbe8-9d4b-4fd5-ab54-69867f2003d5","type":"BasicTickFormatter"},"plot":{"id":"6397bab9-e80c-4f17-874e-4cb5e5c65574","subtype":"Figure","type":"Plot"},"ticker":{"id":"2db721b8-97d7-4ce4-9ea4-dfdde52e897d","type":"BasicTicker"}},"id":"e7c283b6-b786-4900-ae08-da0b5725a2a7","type":"LinearAxis"},{"attributes":{},"id":"22b8e107-9a5c-4c95-b777-4c666086bac4","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6397bab9-e80c-4f17-874e-4cb5e5c65574","subtype":"Figure","type":"Plot"},"ticker":{"id":"2db721b8-97d7-4ce4-9ea4-dfdde52e897d","type":"BasicTicker"}},"id":"cd04f88d-e053-42c4-a95b-ba8047f79b94","type":"Grid"},{"attributes":{"callback":null},"id":"773bffc1-023d-4423-9a08-ad821ad8fc66","type":"DataRange1d"},{"attributes":{"plot":{"id":"6397bab9-e80c-4f17-874e-4cb5e5c65574","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5874a6d-462c-4706-80fb-0eafbf37502e","type":"BasicTicker"}},"id":"f36b34bc-68cd-4502-9f8d-6ae45bf33325","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17161de9-fe9a-4291-b5d8-3eb11d306132","type":"Circle"},{"attributes":{"overlay":{"id":"dbf57fc0-45d6-445d-95e0-2b374bf057d0","type":"BoxAnnotation"}},"id":"8df216d7-c9ba-4d42-88d7-1f3be0226716","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"22b8e107-9a5c-4c95-b777-4c666086bac4","type":"BasicTickFormatter"},"plot":{"id":"6397bab9-e80c-4f17-874e-4cb5e5c65574","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5874a6d-462c-4706-80fb-0eafbf37502e","type":"BasicTicker"}},"id":"bef60b08-b089-444d-bc04-4b5f8ce4f9ed","type":"LinearAxis"}],"root_ids":["6397bab9-e80c-4f17-874e-4cb5e5c65574"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"111f63c7-78dc-4b8c-adfb-dc768d7ed717","elementid":"4adc0e6d-860b-4f86-be40-527e068da097","modelid":"6397bab9-e80c-4f17-874e-4cb5e5c65574"}];
                
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
