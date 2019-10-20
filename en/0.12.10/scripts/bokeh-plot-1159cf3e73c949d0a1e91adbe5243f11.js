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
      };var element = document.getElementById("8d91efe3-bf07-4577-a665-0af08484e7cb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d91efe3-bf07-4577-a665-0af08484e7cb' but no matching script tag was found. ")
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
                    var docs_json = {"105827c0-8ee2-492b-85d9-839a88e3ac60":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19ceed9a-c3b9-4f82-86b4-eedd7526790b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7913be83-0686-456a-8efd-9b9e330e0a1b","type":"CategoricalTicker"}},"id":"9472597f-382b-4638-a437-2d44a5f4bd32","type":"Grid"},{"attributes":{},"id":"3dc7a3e4-0492-44d8-b52d-5a413caf0cb2","type":"WheelZoomTool"},{"attributes":{"items":[{"id":"dd0bea9a-a7db-4f50-8556-3e4a2ac8f6da","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"19ceed9a-c3b9-4f82-86b4-eedd7526790b","subtype":"Figure","type":"Plot"}},"id":"114314cc-5986-479f-a746-c0db697ccf8f","type":"Legend"},{"attributes":{"formatter":{"id":"ed106415-ec04-4039-bff0-2b8005fb9b69","type":"CategoricalTickFormatter"},"plot":{"id":"19ceed9a-c3b9-4f82-86b4-eedd7526790b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7913be83-0686-456a-8efd-9b9e330e0a1b","type":"CategoricalTicker"}},"id":"d0573ef2-ddc2-4ac3-b456-86d7e1aca866","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"c27d0291-98f8-42c3-a9cc-9fca65a76c6c","type":"ColumnDataSource"},"glyph":{"id":"909a4511-1eb9-4c75-bb3d-a90a22e0850c","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dbbc4ae8-0f67-45cb-85e8-3a96d166d140","type":"VBar"},"selection_glyph":null,"view":{"id":"236557eb-8c12-4b27-94cf-7ecb51358186","type":"CDSView"}},"id":"e8c65f2f-3486-4098-9ef0-3b1af3c3ac8b","type":"GlyphRenderer"},{"attributes":{},"id":"7913be83-0686-456a-8efd-9b9e330e0a1b","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"dbbc4ae8-0f67-45cb-85e8-3a96d166d140","type":"VBar"},{"attributes":{},"id":"74f33777-8c77-4db9-9507-c43b7e39701f","type":"PanTool"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"e8c65f2f-3486-4098-9ef0-3b1af3c3ac8b","type":"GlyphRenderer"}]},"id":"dd0bea9a-a7db-4f50-8556-3e4a2ac8f6da","type":"LegendItem"},{"attributes":{},"id":"8ff3fedd-0171-4ab1-8316-fc9ecd34a282","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"19ceed9a-c3b9-4f82-86b4-eedd7526790b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ff3fedd-0171-4ab1-8316-fc9ecd34a282","type":"BasicTicker"}},"id":"6ab8aef4-ecb1-41be-afd5-b767a4d73ef0","type":"Grid"},{"attributes":{},"id":"28680875-9e97-41d2-a410-267b4a6d563d","type":"CategoricalScale"},{"attributes":{},"id":"b42090f4-1c7e-4c6d-a53e-26af9b6bad2c","type":"BasicTickFormatter"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"8d335cff-a286-435f-b0cf-b344e092adf0","type":"CategoricalColorMapper"},{"attributes":{},"id":"efdd4d72-ebde-4863-abc1-6f98bf688f1b","type":"HelpTool"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"8d335cff-a286-435f-b0cf-b344e092adf0","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"909a4511-1eb9-4c75-bb3d-a90a22e0850c","type":"VBar"},{"attributes":{},"id":"c4a908b0-5d0c-4663-9d22-f0ce811b519a","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"c27d0291-98f8-42c3-a9cc-9fca65a76c6c","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"d0573ef2-ddc2-4ac3-b456-86d7e1aca866","type":"CategoricalAxis"}],"left":[{"id":"5d193390-1aad-420a-9818-c0a91a3b7e5c","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"d0573ef2-ddc2-4ac3-b456-86d7e1aca866","type":"CategoricalAxis"},{"id":"9472597f-382b-4638-a437-2d44a5f4bd32","type":"Grid"},{"id":"5d193390-1aad-420a-9818-c0a91a3b7e5c","type":"LinearAxis"},{"id":"6ab8aef4-ecb1-41be-afd5-b767a4d73ef0","type":"Grid"},{"id":"5059d386-4990-4ba3-9539-83905ae69436","type":"BoxAnnotation"},{"id":"114314cc-5986-479f-a746-c0db697ccf8f","type":"Legend"},{"id":"e8c65f2f-3486-4098-9ef0-3b1af3c3ac8b","type":"GlyphRenderer"}],"title":{"id":"67a67273-eb71-4e82-b5e0-756e721b6a1d","type":"Title"},"toolbar":{"id":"1040cf33-f88e-47bf-9394-e88d35d76194","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"72e4da14-150f-4ac0-9e2c-eace3c134a5e","type":"FactorRange"},"x_scale":{"id":"28680875-9e97-41d2-a410-267b4a6d563d","type":"CategoricalScale"},"y_range":{"id":"7732d7ae-51db-4036-bf8e-9ab9245e5c03","type":"DataRange1d"},"y_scale":{"id":"38e36ef4-065d-42c3-a46b-4dffb5119ac1","type":"LinearScale"}},"id":"19ceed9a-c3b9-4f82-86b4-eedd7526790b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"67a67273-eb71-4e82-b5e0-756e721b6a1d","type":"Title"},{"attributes":{"overlay":{"id":"5059d386-4990-4ba3-9539-83905ae69436","type":"BoxAnnotation"}},"id":"53a33ddc-9c4b-42f7-a337-3985a8a2006c","type":"BoxZoomTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"72e4da14-150f-4ac0-9e2c-eace3c134a5e","type":"FactorRange"},{"attributes":{"source":{"id":"c27d0291-98f8-42c3-a9cc-9fca65a76c6c","type":"ColumnDataSource"}},"id":"236557eb-8c12-4b27-94cf-7ecb51358186","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"74f33777-8c77-4db9-9507-c43b7e39701f","type":"PanTool"},{"id":"3dc7a3e4-0492-44d8-b52d-5a413caf0cb2","type":"WheelZoomTool"},{"id":"53a33ddc-9c4b-42f7-a337-3985a8a2006c","type":"BoxZoomTool"},{"id":"c4a908b0-5d0c-4663-9d22-f0ce811b519a","type":"SaveTool"},{"id":"6d31c4e9-ea0e-4328-9f47-3daebf192822","type":"ResetTool"},{"id":"efdd4d72-ebde-4863-abc1-6f98bf688f1b","type":"HelpTool"}]},"id":"1040cf33-f88e-47bf-9394-e88d35d76194","type":"Toolbar"},{"attributes":{},"id":"ed106415-ec04-4039-bff0-2b8005fb9b69","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"b42090f4-1c7e-4c6d-a53e-26af9b6bad2c","type":"BasicTickFormatter"},"plot":{"id":"19ceed9a-c3b9-4f82-86b4-eedd7526790b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ff3fedd-0171-4ab1-8316-fc9ecd34a282","type":"BasicTicker"}},"id":"5d193390-1aad-420a-9818-c0a91a3b7e5c","type":"LinearAxis"},{"attributes":{},"id":"6d31c4e9-ea0e-4328-9f47-3daebf192822","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5059d386-4990-4ba3-9539-83905ae69436","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":9,"start":0},"id":"7732d7ae-51db-4036-bf8e-9ab9245e5c03","type":"DataRange1d"},{"attributes":{},"id":"38e36ef4-065d-42c3-a46b-4dffb5119ac1","type":"LinearScale"}],"root_ids":["19ceed9a-c3b9-4f82-86b4-eedd7526790b"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"105827c0-8ee2-492b-85d9-839a88e3ac60","elementid":"8d91efe3-bf07-4577-a665-0af08484e7cb","modelid":"19ceed9a-c3b9-4f82-86b4-eedd7526790b"}];
                
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
