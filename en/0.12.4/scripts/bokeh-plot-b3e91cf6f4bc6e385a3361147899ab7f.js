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
      };var element = document.getElementById("8a981daf-0cda-45e3-a4a4-75f5e52e2dfa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8a981daf-0cda-45e3-a4a4-75f5e52e2dfa' but no matching script tag was found. ")
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
                var docs_json = {"6c668971-2e82-4313-8dc8-e2d157aa42a7":{"roots":{"references":[{"attributes":{},"id":"3e58ff7a-7345-43e5-a698-8789a498c6d6","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","desc","y"],"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"85f9fdc7-32b4-4bef-ac37-3f98319bf52e","type":"ColumnDataSource"},{"attributes":{"callback":null,"plot":{"id":"6e0b341f-77a9-4f04-8449-84fb63111c6b","subtype":"Figure","type":"Plot"},"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"4925fd55-1847-40f1-85c6-5fe5db3ae65e","type":"HoverTool"},{"attributes":{},"id":"b6b37aea-7545-4570-9ea0-e7b1388724fa","type":"BasicTicker"},{"attributes":{"below":[{"id":"1b1e8fae-9b52-4d75-b59f-0c09b2e16292","type":"LinearAxis"}],"left":[{"id":"f3f3536d-0037-4862-a4b1-710a8b55a41f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1b1e8fae-9b52-4d75-b59f-0c09b2e16292","type":"LinearAxis"},{"id":"f3e4f12d-ba25-4547-ba4c-f796dc8d4042","type":"Grid"},{"id":"f3f3536d-0037-4862-a4b1-710a8b55a41f","type":"LinearAxis"},{"id":"86cae133-efed-44c2-a681-f1061930af67","type":"Grid"},{"id":"71cf9b6d-149b-4e8d-b552-15d9d762bc48","type":"GlyphRenderer"}],"title":{"id":"8465af19-1d16-43ba-a921-5d41a1f90e6b","type":"Title"},"tool_events":{"id":"494f1390-9c31-4796-95f8-6abe77e62885","type":"ToolEvents"},"toolbar":{"id":"31f5657f-32da-4f6f-b018-ad11c000239a","type":"Toolbar"},"x_range":{"id":"90b76fae-6428-4f42-8ffd-fdf8b4ae01fd","type":"DataRange1d"},"y_range":{"id":"a5b270d2-96e1-49c3-99d0-da33905c3e26","type":"DataRange1d"}},"id":"6e0b341f-77a9-4f04-8449-84fb63111c6b","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"110c4f11-2f09-46e1-96e1-e682a4835701","type":"BasicTickFormatter"},"plot":{"id":"6e0b341f-77a9-4f04-8449-84fb63111c6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6b37aea-7545-4570-9ea0-e7b1388724fa","type":"BasicTicker"}},"id":"1b1e8fae-9b52-4d75-b59f-0c09b2e16292","type":"LinearAxis"},{"attributes":{},"id":"494f1390-9c31-4796-95f8-6abe77e62885","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4925fd55-1847-40f1-85c6-5fe5db3ae65e","type":"HoverTool"}]},"id":"31f5657f-32da-4f6f-b018-ad11c000239a","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"6e0b341f-77a9-4f04-8449-84fb63111c6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e58ff7a-7345-43e5-a698-8789a498c6d6","type":"BasicTicker"}},"id":"86cae133-efed-44c2-a681-f1061930af67","type":"Grid"},{"attributes":{"data_source":{"id":"85f9fdc7-32b4-4bef-ac37-3f98319bf52e","type":"ColumnDataSource"},"glyph":{"id":"0cbc99da-d541-48f7-b5e9-3e7cab1182b9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e00073cf-7f37-4524-8952-522069745e4c","type":"Circle"},"selection_glyph":null},"id":"71cf9b6d-149b-4e8d-b552-15d9d762bc48","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"e00073cf-7f37-4524-8952-522069745e4c","type":"Circle"},{"attributes":{"callback":null},"id":"a5b270d2-96e1-49c3-99d0-da33905c3e26","type":"DataRange1d"},{"attributes":{"plot":{"id":"6e0b341f-77a9-4f04-8449-84fb63111c6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6b37aea-7545-4570-9ea0-e7b1388724fa","type":"BasicTicker"}},"id":"f3e4f12d-ba25-4547-ba4c-f796dc8d4042","type":"Grid"},{"attributes":{"formatter":{"id":"b04c5199-94d0-440f-a503-79d4486b33d4","type":"BasicTickFormatter"},"plot":{"id":"6e0b341f-77a9-4f04-8449-84fb63111c6b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e58ff7a-7345-43e5-a698-8789a498c6d6","type":"BasicTicker"}},"id":"f3f3536d-0037-4862-a4b1-710a8b55a41f","type":"LinearAxis"},{"attributes":{},"id":"b04c5199-94d0-440f-a503-79d4486b33d4","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"8465af19-1d16-43ba-a921-5d41a1f90e6b","type":"Title"},{"attributes":{"callback":null},"id":"90b76fae-6428-4f42-8ffd-fdf8b4ae01fd","type":"DataRange1d"},{"attributes":{},"id":"110c4f11-2f09-46e1-96e1-e682a4835701","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0cbc99da-d541-48f7-b5e9-3e7cab1182b9","type":"Circle"}],"root_ids":["6e0b341f-77a9-4f04-8449-84fb63111c6b"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"6c668971-2e82-4313-8dc8-e2d157aa42a7","elementid":"8a981daf-0cda-45e3-a4a4-75f5e52e2dfa","modelid":"6e0b341f-77a9-4f04-8449-84fb63111c6b"}];
                
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
