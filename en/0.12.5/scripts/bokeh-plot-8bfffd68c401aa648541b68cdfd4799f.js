(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("9317bc4e-49a4-4a25-a949-ea05cb962f92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9317bc4e-49a4-4a25-a949-ea05cb962f92' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"b8305576-663f-445a-958c-12f94bd78939":{"roots":{"references":[{"attributes":{"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"}},"id":"4dd131c7-74ba-493f-88a5-b9491e6bad4d","type":"WheelZoomTool"},{"attributes":{},"id":"5881a866-1fba-4fea-bd8d-063fe11ab309","type":"BasicTicker"},{"attributes":{"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"},"ticker":{"id":"60e3bc55-a769-4c48-9a5d-51dc5c01d559","type":"BasicTicker"}},"id":"bea376a2-ce07-4d69-bb0f-988ed7c0f7da","type":"Grid"},{"attributes":{"formatter":{"id":"3f278405-8b3d-4766-984f-94f9677e9fa8","type":"FuncTickFormatter"},"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5881a866-1fba-4fea-bd8d-063fe11ab309","type":"BasicTicker"}},"id":"95cb6f5d-9906-4bd4-9be8-df79af04dd56","type":"LinearAxis"},{"attributes":{"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"}},"id":"2ab5f334-d00e-4808-8b3a-446caef78e09","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"62d44a9a-b74c-4e52-b0ce-42f4ae276d54","type":"Title"},{"attributes":{"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"}},"id":"12ba8d98-623e-4d59-b294-4bbafc94fec8","type":"ResetTool"},{"attributes":{},"id":"3e0761a4-a2d6-4371-8a23-3cb52432265e","type":"ToolEvents"},{"attributes":{"callback":null},"id":"6a810e50-d79d-40f5-942c-bac77b17fd1a","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]}},"id":"0388f28a-16db-47b9-aa01-cd867335e308","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d3ad6b7-e54e-48db-8fed-732073025585","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"61c1421f-5694-4eac-b266-a97396b9625b","type":"LinearAxis"}],"left":[{"id":"95cb6f5d-9906-4bd4-9be8-df79af04dd56","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"61c1421f-5694-4eac-b266-a97396b9625b","type":"LinearAxis"},{"id":"bea376a2-ce07-4d69-bb0f-988ed7c0f7da","type":"Grid"},{"id":"95cb6f5d-9906-4bd4-9be8-df79af04dd56","type":"LinearAxis"},{"id":"e6948618-ea1e-4ee2-b5ac-94be10d0116e","type":"Grid"},{"id":"1d3ad6b7-e54e-48db-8fed-732073025585","type":"BoxAnnotation"},{"id":"8bf99e79-d9e4-42ba-9f24-03b83fd6c4fc","type":"GlyphRenderer"}],"title":{"id":"62d44a9a-b74c-4e52-b0ce-42f4ae276d54","type":"Title"},"tool_events":{"id":"3e0761a4-a2d6-4371-8a23-3cb52432265e","type":"ToolEvents"},"toolbar":{"id":"86ff96cf-900d-4755-8c08-e64a2b2e682e","type":"Toolbar"},"x_range":{"id":"942ca8aa-670d-48d3-b12e-1520f3e1b0bf","type":"DataRange1d"},"y_range":{"id":"6a810e50-d79d-40f5-942c-bac77b17fd1a","type":"DataRange1d"}},"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"},{"attributes":{"code":"\n    return Math.floor(tick) + \" + \" + (tick % 1).toFixed(2)\n"},"id":"3f278405-8b3d-4766-984f-94f9677e9fa8","type":"FuncTickFormatter"},{"attributes":{},"id":"85e1c722-3bd7-40be-a142-987e9f4c703f","type":"BasicTickFormatter"},{"attributes":{},"id":"60e3bc55-a769-4c48-9a5d-51dc5c01d559","type":"BasicTicker"},{"attributes":{"overlay":{"id":"1d3ad6b7-e54e-48db-8fed-732073025585","type":"BoxAnnotation"},"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"}},"id":"60a57226-0c87-4905-9232-ede213be90de","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"}},"id":"af4d0807-1960-45b6-b1d7-444b07df54c0","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"af4d0807-1960-45b6-b1d7-444b07df54c0","type":"PanTool"},{"id":"4dd131c7-74ba-493f-88a5-b9491e6bad4d","type":"WheelZoomTool"},{"id":"60a57226-0c87-4905-9232-ede213be90de","type":"BoxZoomTool"},{"id":"3af1676f-9d6a-493a-ab9c-64fde0e37f5d","type":"SaveTool"},{"id":"12ba8d98-623e-4d59-b294-4bbafc94fec8","type":"ResetTool"},{"id":"2ab5f334-d00e-4808-8b3a-446caef78e09","type":"HelpTool"}]},"id":"86ff96cf-900d-4755-8c08-e64a2b2e682e","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b88f725-8b7c-47bc-96b2-ae55b86003ce","type":"Circle"},{"attributes":{"callback":null},"id":"942ca8aa-670d-48d3-b12e-1520f3e1b0bf","type":"DataRange1d"},{"attributes":{"formatter":{"id":"85e1c722-3bd7-40be-a142-987e9f4c703f","type":"BasicTickFormatter"},"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"},"ticker":{"id":"60e3bc55-a769-4c48-9a5d-51dc5c01d559","type":"BasicTicker"}},"id":"61c1421f-5694-4eac-b266-a97396b9625b","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"258e59e8-233f-4a40-9dbb-8df8c6e35912","type":"Circle"},{"attributes":{"data_source":{"id":"0388f28a-16db-47b9-aa01-cd867335e308","type":"ColumnDataSource"},"glyph":{"id":"0b88f725-8b7c-47bc-96b2-ae55b86003ce","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"258e59e8-233f-4a40-9dbb-8df8c6e35912","type":"Circle"},"selection_glyph":null},"id":"8bf99e79-d9e4-42ba-9f24-03b83fd6c4fc","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"}},"id":"3af1676f-9d6a-493a-ab9c-64fde0e37f5d","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a","subtype":"Figure","type":"Plot"},"ticker":{"id":"5881a866-1fba-4fea-bd8d-063fe11ab309","type":"BasicTicker"}},"id":"e6948618-ea1e-4ee2-b5ac-94be10d0116e","type":"Grid"}],"root_ids":["6addaf83-72ef-40f1-910a-d2bb3aa3c95a"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"b8305576-663f-445a-958c-12f94bd78939","elementid":"9317bc4e-49a4-4a25-a949-ea05cb962f92","modelid":"6addaf83-72ef-40f1-910a-d2bb3aa3c95a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
