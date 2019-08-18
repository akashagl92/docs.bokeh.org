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
      };var element = document.getElementById("095c0244-43bb-49c6-8165-be6ef1ebbe0f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '095c0244-43bb-49c6-8165-be6ef1ebbe0f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"02dfe0f8-6a26-4b21-9032-04b951aea9e3":{"roots":{"references":[{"attributes":{},"id":"bef0a45c-1472-476b-9fef-b5d6ce19805a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f9d431d0-e824-446c-ad29-b7b2e996e989","type":"DataRange1d"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"61070bd6-19aa-49ac-9235-02ec22279ac9","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"abb4b461-36fd-4c92-a6d4-0417c174a465","subtype":"Figure","type":"Plot"},"ticker":{"id":"127aee9b-44de-48af-839b-ea3cf71f8702","type":"BasicTicker"}},"id":"32b489be-ac14-4042-af65-8dc03f17a078","type":"Grid"},{"attributes":{"callback":null},"id":"68004f5c-67a4-4048-b7f9-588d243bea47","type":"DataRange1d"},{"attributes":{"formatter":{"id":"25333abc-b0c5-496e-ba99-7ec82a8bc9a1","type":"BasicTickFormatter"},"plot":{"id":"abb4b461-36fd-4c92-a6d4-0417c174a465","subtype":"Figure","type":"Plot"},"ticker":{"id":"bef0a45c-1472-476b-9fef-b5d6ce19805a","type":"BasicTicker"},"visible":false},"id":"c1be60bc-51ad-474d-98e9-3616830c414b","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c2c58ce2-e743-4d49-8a5f-1912b5c41d2c","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bdae6413-4a8a-45c2-9e70-6cf33edfade5","type":"Line"},{"attributes":{"data_source":{"id":"f8bf8474-571f-4dc5-8524-020e5c5fa520","type":"ColumnDataSource"},"glyph":{"id":"61070bd6-19aa-49ac-9235-02ec22279ac9","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"c2c58ce2-e743-4d49-8a5f-1912b5c41d2c","type":"Line"},"selection_glyph":null,"visible":false},"id":"1d376461-cf9d-49ad-a026-8f06cd00c43a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"8086fd73-7f47-4e76-bbe0-47c27136d017","type":"ColumnDataSource"},{"attributes":{},"id":"228cecd7-31f1-4388-9473-af6bbfc9860a","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ca7e01f9-e067-46c3-baf4-607db1a34029","type":"Toolbar"},{"attributes":{"data_source":{"id":"8086fd73-7f47-4e76-bbe0-47c27136d017","type":"ColumnDataSource"},"glyph":{"id":"8ac4e738-164a-4320-bf80-b52f7a72a6b8","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"bdae6413-4a8a-45c2-9e70-6cf33edfade5","type":"Line"},"selection_glyph":null},"id":"1f764a96-b877-4067-a00b-639803829274","type":"GlyphRenderer"},{"attributes":{},"id":"f3832aa9-1b2a-4fb2-b424-70ef7060d357","type":"BasicTickFormatter"},{"attributes":{},"id":"127aee9b-44de-48af-839b-ea3cf71f8702","type":"BasicTicker"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ac4e738-164a-4320-bf80-b52f7a72a6b8","type":"Line"},{"attributes":{"below":[{"id":"c1be60bc-51ad-474d-98e9-3616830c414b","type":"LinearAxis"}],"left":[{"id":"43a21eb5-115f-472a-ad73-e53479bb24a8","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"c1be60bc-51ad-474d-98e9-3616830c414b","type":"LinearAxis"},{"id":"b441722a-c7d5-4a68-96cd-f79d6f8a1630","type":"Grid"},{"id":"43a21eb5-115f-472a-ad73-e53479bb24a8","type":"LinearAxis"},{"id":"32b489be-ac14-4042-af65-8dc03f17a078","type":"Grid"},{"id":"1f764a96-b877-4067-a00b-639803829274","type":"GlyphRenderer"},{"id":"1d376461-cf9d-49ad-a026-8f06cd00c43a","type":"GlyphRenderer"}],"title":{"id":"602e968d-fa19-43d0-a4a7-c1e3306a4414","type":"Title"},"tool_events":{"id":"228cecd7-31f1-4388-9473-af6bbfc9860a","type":"ToolEvents"},"toolbar":{"id":"ca7e01f9-e067-46c3-baf4-607db1a34029","type":"Toolbar"},"x_range":{"id":"f9d431d0-e824-446c-ad29-b7b2e996e989","type":"DataRange1d"},"y_range":{"id":"68004f5c-67a4-4048-b7f9-588d243bea47","type":"DataRange1d"}},"id":"abb4b461-36fd-4c92-a6d4-0417c174a465","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"25333abc-b0c5-496e-ba99-7ec82a8bc9a1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f3832aa9-1b2a-4fb2-b424-70ef7060d357","type":"BasicTickFormatter"},"plot":{"id":"abb4b461-36fd-4c92-a6d4-0417c174a465","subtype":"Figure","type":"Plot"},"ticker":{"id":"127aee9b-44de-48af-839b-ea3cf71f8702","type":"BasicTicker"}},"id":"43a21eb5-115f-472a-ad73-e53479bb24a8","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"602e968d-fa19-43d0-a4a7-c1e3306a4414","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"f8bf8474-571f-4dc5-8524-020e5c5fa520","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"abb4b461-36fd-4c92-a6d4-0417c174a465","subtype":"Figure","type":"Plot"},"ticker":{"id":"bef0a45c-1472-476b-9fef-b5d6ce19805a","type":"BasicTicker"},"visible":false},"id":"b441722a-c7d5-4a68-96cd-f79d6f8a1630","type":"Grid"}],"root_ids":["abb4b461-36fd-4c92-a6d4-0417c174a465"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"02dfe0f8-6a26-4b21-9032-04b951aea9e3","elementid":"095c0244-43bb-49c6-8165-be6ef1ebbe0f","modelid":"abb4b461-36fd-4c92-a6d4-0417c174a465"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
