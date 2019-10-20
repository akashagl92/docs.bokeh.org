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
      };var element = document.getElementById("be0fbc5a-9b4b-449a-aefa-7d8dfc34a495");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be0fbc5a-9b4b-449a-aefa-7d8dfc34a495' but no matching script tag was found. ")
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
                var docs_json = {"4d12e329-ec40-46ea-8ab0-33ca14675738":{"roots":{"references":[{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"8aed80ad-ad01-4395-83b5-c87a8efa5ad5","type":"Segment"},{"attributes":{"below":[{"id":"75802ea7-6825-41bf-b1a9-726214b2c9d5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9b2ff0ff-5a8d-470a-a4c1-3e7fed118562","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e2004778-d421-4764-882d-35f3892123da","type":"GlyphRenderer"},{"id":"75802ea7-6825-41bf-b1a9-726214b2c9d5","type":"LinearAxis"},{"id":"9b2ff0ff-5a8d-470a-a4c1-3e7fed118562","type":"LinearAxis"},{"id":"323f1b30-72fe-4e36-b76e-b506d2dc79ba","type":"Grid"},{"id":"4ca47381-a4d1-4524-8786-95aba90ae550","type":"Grid"}],"title":null,"tool_events":{"id":"5209e768-c35a-4a62-9d78-89777568aea5","type":"ToolEvents"},"toolbar":{"id":"55056163-036d-44c4-9c0f-81fdab8d855c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ba1ea85b-2457-4a8c-8e20-bb6f43e4a4ab","type":"DataRange1d"},"y_range":{"id":"1127dcd8-c5d1-4008-a11d-fea0ccd91efa","type":"DataRange1d"}},"id":"a4e2d018-7c02-4cc0-8068-6218e9cea9d8","type":"Plot"},{"attributes":{"plot":{"id":"a4e2d018-7c02-4cc0-8068-6218e9cea9d8","type":"Plot"},"ticker":{"id":"04e71a21-a7a8-4246-b932-2271d413901f","type":"BasicTicker"}},"id":"323f1b30-72fe-4e36-b76e-b506d2dc79ba","type":"Grid"},{"attributes":{"formatter":{"id":"51bfae97-3772-4f9d-b606-1f83c28af80d","type":"BasicTickFormatter"},"plot":{"id":"a4e2d018-7c02-4cc0-8068-6218e9cea9d8","type":"Plot"},"ticker":{"id":"ec44dd91-c392-4b95-8da3-9893309829b5","type":"BasicTicker"}},"id":"9b2ff0ff-5a8d-470a-a4c1-3e7fed118562","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","ym01","y","xm01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}}},"id":"75468e20-314a-4b03-8136-58e465fd0a59","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"1127dcd8-c5d1-4008-a11d-fea0ccd91efa","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"55056163-036d-44c4-9c0f-81fdab8d855c","type":"Toolbar"},{"attributes":{"data_source":{"id":"75468e20-314a-4b03-8136-58e465fd0a59","type":"ColumnDataSource"},"glyph":{"id":"8aed80ad-ad01-4395-83b5-c87a8efa5ad5","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e2004778-d421-4764-882d-35f3892123da","type":"GlyphRenderer"},{"attributes":{},"id":"ec44dd91-c392-4b95-8da3-9893309829b5","type":"BasicTicker"},{"attributes":{},"id":"5209e768-c35a-4a62-9d78-89777568aea5","type":"ToolEvents"},{"attributes":{"formatter":{"id":"ab749ad4-5b40-4406-99c5-1a40dc9d6421","type":"BasicTickFormatter"},"plot":{"id":"a4e2d018-7c02-4cc0-8068-6218e9cea9d8","type":"Plot"},"ticker":{"id":"04e71a21-a7a8-4246-b932-2271d413901f","type":"BasicTicker"}},"id":"75802ea7-6825-41bf-b1a9-726214b2c9d5","type":"LinearAxis"},{"attributes":{},"id":"04e71a21-a7a8-4246-b932-2271d413901f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a4e2d018-7c02-4cc0-8068-6218e9cea9d8","type":"Plot"},"ticker":{"id":"ec44dd91-c392-4b95-8da3-9893309829b5","type":"BasicTicker"}},"id":"4ca47381-a4d1-4524-8786-95aba90ae550","type":"Grid"},{"attributes":{},"id":"51bfae97-3772-4f9d-b606-1f83c28af80d","type":"BasicTickFormatter"},{"attributes":{},"id":"ab749ad4-5b40-4406-99c5-1a40dc9d6421","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ba1ea85b-2457-4a8c-8e20-bb6f43e4a4ab","type":"DataRange1d"}],"root_ids":["a4e2d018-7c02-4cc0-8068-6218e9cea9d8"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"4d12e329-ec40-46ea-8ab0-33ca14675738","elementid":"be0fbc5a-9b4b-449a-aefa-7d8dfc34a495","modelid":"a4e2d018-7c02-4cc0-8068-6218e9cea9d8"}];
                
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
