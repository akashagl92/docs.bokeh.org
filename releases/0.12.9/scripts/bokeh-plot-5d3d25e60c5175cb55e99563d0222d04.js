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
      };var element = document.getElementById("aae76aff-e4e0-4126-964a-64aab52f0e4e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aae76aff-e4e0-4126-964a-64aab52f0e4e' but no matching script tag was found. ")
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
                    var docs_json = {"65039dcd-815f-4529-b249-9fa5b05619c9":{"roots":{"references":[{"attributes":{},"id":"acc44e4f-b3f0-45da-b332-f852d35cf06c","type":"WheelZoomTool"},{"attributes":{"source":{"id":"efdb3e95-d741-400a-9ede-c384b55d6d94","type":"ColumnDataSource"}},"id":"a6f3901a-0c4a-47fc-bec3-3df9952ed643","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce34abcd-93e1-4200-aa11-2091a6b5742d","type":"Circle"},{"attributes":{"below":[{"id":"7189c1f4-2d92-43df-824a-916f2fb129dd","type":"LinearAxis"}],"left":[{"id":"f7b429fc-b1c9-4c99-9568-d4cdf0cd2354","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7189c1f4-2d92-43df-824a-916f2fb129dd","type":"LinearAxis"},{"id":"e3013e4d-49d6-4f34-a5e6-efeb92a2448d","type":"Grid"},{"id":"f7b429fc-b1c9-4c99-9568-d4cdf0cd2354","type":"LinearAxis"},{"id":"ba2800f3-525f-4bfb-a778-3b2af08b2c26","type":"Grid"},{"id":"727c7140-557e-4632-bf25-199411cbdc91","type":"BoxAnnotation"},{"id":"d5634e46-8d2d-477b-8563-f71986508cd3","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"799685b1-6147-41e8-9a21-772152749549","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"4d043af7-d9b2-4478-adfe-d1020ea82e0b","type":"DataRange1d"},"x_scale":{"id":"d77db0c3-6559-46d8-9aca-831dae6905aa","type":"LinearScale"},"y_range":{"id":"6e848c0f-9f9f-4a28-8f1f-7c0b0ed71158","type":"DataRange1d"},"y_scale":{"id":"a653ba5e-7364-4778-a3ff-0a3ede868b5b","type":"LinearScale"}},"id":"a7d738a0-810d-4e02-9702-f8f5a9ae9012","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"a7d738a0-810d-4e02-9702-f8f5a9ae9012","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ceca75a-3a01-4a07-af2e-45f08250054c","type":"BasicTicker"}},"id":"ba2800f3-525f-4bfb-a778-3b2af08b2c26","type":"Grid"},{"attributes":{"overlay":{"id":"727c7140-557e-4632-bf25-199411cbdc91","type":"BoxAnnotation"}},"id":"dd3a3ef3-072d-4d95-9157-167f1c472220","type":"BoxZoomTool"},{"attributes":{},"id":"19b75396-5519-4292-808e-8d41c584754a","type":"PanTool"},{"attributes":{},"id":"45190918-7824-4eda-ad5f-93276d303164","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6e848c0f-9f9f-4a28-8f1f-7c0b0ed71158","type":"DataRange1d"},{"attributes":{},"id":"80ba403f-cdc6-4732-8179-5d53d628a6c9","type":"ResetTool"},{"attributes":{"formatter":{"id":"45190918-7824-4eda-ad5f-93276d303164","type":"BasicTickFormatter"},"plot":{"id":"a7d738a0-810d-4e02-9702-f8f5a9ae9012","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ceca75a-3a01-4a07-af2e-45f08250054c","type":"BasicTicker"}},"id":"f7b429fc-b1c9-4c99-9568-d4cdf0cd2354","type":"LinearAxis"},{"attributes":{},"id":"3910538d-1c71-4c74-8590-418bb0fff81b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a7d738a0-810d-4e02-9702-f8f5a9ae9012","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdaef3ef-6f00-4e2e-8ffc-f629bb9de5d1","type":"BasicTicker"}},"id":"e3013e4d-49d6-4f34-a5e6-efeb92a2448d","type":"Grid"},{"attributes":{},"id":"d77db0c3-6559-46d8-9aca-831dae6905aa","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"727c7140-557e-4632-bf25-199411cbdc91","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"efdb3e95-d741-400a-9ede-c384b55d6d94","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"efdb3e95-d741-400a-9ede-c384b55d6d94","type":"ColumnDataSource"},"glyph":{"id":"ce34abcd-93e1-4200-aa11-2091a6b5742d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"797e39d2-92b7-4527-bd68-dc7da1a9c839","type":"Circle"},"selection_glyph":null,"view":{"id":"a6f3901a-0c4a-47fc-bec3-3df9952ed643","type":"CDSView"}},"id":"d5634e46-8d2d-477b-8563-f71986508cd3","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"19b75396-5519-4292-808e-8d41c584754a","type":"PanTool"},{"id":"acc44e4f-b3f0-45da-b332-f852d35cf06c","type":"WheelZoomTool"},{"id":"dd3a3ef3-072d-4d95-9157-167f1c472220","type":"BoxZoomTool"},{"id":"eea0c077-da25-4066-a7f4-f2ead475d1a2","type":"SaveTool"},{"id":"80ba403f-cdc6-4732-8179-5d53d628a6c9","type":"ResetTool"},{"id":"70d7c53e-bb8f-4fc4-abc5-0d11f41d4e2d","type":"HelpTool"}]},"id":"799685b1-6147-41e8-9a21-772152749549","type":"Toolbar"},{"attributes":{"callback":null},"id":"4d043af7-d9b2-4478-adfe-d1020ea82e0b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3910538d-1c71-4c74-8590-418bb0fff81b","type":"BasicTickFormatter"},"plot":{"id":"a7d738a0-810d-4e02-9702-f8f5a9ae9012","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdaef3ef-6f00-4e2e-8ffc-f629bb9de5d1","type":"BasicTicker"}},"id":"7189c1f4-2d92-43df-824a-916f2fb129dd","type":"LinearAxis"},{"attributes":{},"id":"eea0c077-da25-4066-a7f4-f2ead475d1a2","type":"SaveTool"},{"attributes":{},"id":"9ceca75a-3a01-4a07-af2e-45f08250054c","type":"BasicTicker"},{"attributes":{},"id":"a653ba5e-7364-4778-a3ff-0a3ede868b5b","type":"LinearScale"},{"attributes":{},"id":"fdaef3ef-6f00-4e2e-8ffc-f629bb9de5d1","type":"BasicTicker"},{"attributes":{},"id":"70d7c53e-bb8f-4fc4-abc5-0d11f41d4e2d","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"797e39d2-92b7-4527-bd68-dc7da1a9c839","type":"Circle"}],"root_ids":["a7d738a0-810d-4e02-9702-f8f5a9ae9012"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"65039dcd-815f-4529-b249-9fa5b05619c9","elementid":"aae76aff-e4e0-4126-964a-64aab52f0e4e","modelid":"a7d738a0-810d-4e02-9702-f8f5a9ae9012"}];
                
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
