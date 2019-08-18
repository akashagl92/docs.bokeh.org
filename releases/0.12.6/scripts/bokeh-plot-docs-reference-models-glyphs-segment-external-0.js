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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("a6651ec2-36a7-4756-b36b-11b6e46c81ef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a6651ec2-36a7-4756-b36b-11b6e46c81ef' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"7611ce1a-3958-4bd7-abba-ee6d2264dfec":{"roots":{"references":[{"attributes":{"below":[{"id":"61fdfb73-2b23-48e0-b9d4-d03312818051","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2e69402a-7667-49e9-9f02-858d88125b79","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2fc83b18-d229-4a31-8b6e-4634f3c20abc","type":"GlyphRenderer"},{"id":"61fdfb73-2b23-48e0-b9d4-d03312818051","type":"LinearAxis"},{"id":"2e69402a-7667-49e9-9f02-858d88125b79","type":"LinearAxis"},{"id":"c4479739-91f0-41b9-ad31-2e2bf54c507b","type":"Grid"},{"id":"91e5e4eb-629e-417d-bd44-9e5e11503b21","type":"Grid"}],"title":null,"tool_events":{"id":"fd3904e9-9c8d-49fe-9574-bca9da4f6a5c","type":"ToolEvents"},"toolbar":{"id":"448de9da-3c59-4f09-9187-b8579efafabc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5f37df43-2b29-4775-b0bf-d92ad2b04ea9","type":"DataRange1d"},"x_scale":{"id":"ffad3bb8-cc1e-448f-8d71-3f13e3a34e7d","type":"LinearScale"},"y_range":{"id":"6c917653-d8cb-4e3c-b379-e44b22e6565e","type":"DataRange1d"},"y_scale":{"id":"a4bfbd8e-eaf9-4a48-9717-8dd40ff19ecb","type":"LinearScale"}},"id":"e2f02a27-49d8-4597-8dc9-2366a94e2b5e","type":"Plot"},{"attributes":{"callback":null},"id":"6c917653-d8cb-4e3c-b379-e44b22e6565e","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"48294cb6-26c7-4942-97ca-6f218a8c04b7","type":"Segment"},{"attributes":{"plot":{"id":"e2f02a27-49d8-4597-8dc9-2366a94e2b5e","type":"Plot"},"ticker":{"id":"cde4291b-177d-441b-a54f-0ff8edca4e10","type":"BasicTicker"}},"id":"c4479739-91f0-41b9-ad31-2e2bf54c507b","type":"Grid"},{"attributes":{},"id":"fd3904e9-9c8d-49fe-9574-bca9da4f6a5c","type":"ToolEvents"},{"attributes":{"callback":null},"id":"5f37df43-2b29-4775-b0bf-d92ad2b04ea9","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","ym01","xm01","x"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}}},"id":"4cf87f26-35c3-45a9-970f-af409ed8e1ba","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"722b8cd8-101d-4b45-98a3-9dd5020fe2cf","type":"BasicTickFormatter"},"plot":{"id":"e2f02a27-49d8-4597-8dc9-2366a94e2b5e","type":"Plot"},"ticker":{"id":"17984fd3-237f-472d-99c9-e0b4a5b71509","type":"BasicTicker"}},"id":"2e69402a-7667-49e9-9f02-858d88125b79","type":"LinearAxis"},{"attributes":{},"id":"17984fd3-237f-472d-99c9-e0b4a5b71509","type":"BasicTicker"},{"attributes":{},"id":"722b8cd8-101d-4b45-98a3-9dd5020fe2cf","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4cf87f26-35c3-45a9-970f-af409ed8e1ba","type":"ColumnDataSource"},"glyph":{"id":"48294cb6-26c7-4942-97ca-6f218a8c04b7","type":"Segment"},"hover_glyph":null,"muted_glyph":null},"id":"2fc83b18-d229-4a31-8b6e-4634f3c20abc","type":"GlyphRenderer"},{"attributes":{},"id":"68420dae-d5bb-43c8-a292-72283f70f1fa","type":"BasicTickFormatter"},{"attributes":{},"id":"ffad3bb8-cc1e-448f-8d71-3f13e3a34e7d","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"448de9da-3c59-4f09-9187-b8579efafabc","type":"Toolbar"},{"attributes":{"formatter":{"id":"68420dae-d5bb-43c8-a292-72283f70f1fa","type":"BasicTickFormatter"},"plot":{"id":"e2f02a27-49d8-4597-8dc9-2366a94e2b5e","type":"Plot"},"ticker":{"id":"cde4291b-177d-441b-a54f-0ff8edca4e10","type":"BasicTicker"}},"id":"61fdfb73-2b23-48e0-b9d4-d03312818051","type":"LinearAxis"},{"attributes":{},"id":"a4bfbd8e-eaf9-4a48-9717-8dd40ff19ecb","type":"LinearScale"},{"attributes":{},"id":"cde4291b-177d-441b-a54f-0ff8edca4e10","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e2f02a27-49d8-4597-8dc9-2366a94e2b5e","type":"Plot"},"ticker":{"id":"17984fd3-237f-472d-99c9-e0b4a5b71509","type":"BasicTicker"}},"id":"91e5e4eb-629e-417d-bd44-9e5e11503b21","type":"Grid"}],"root_ids":["e2f02a27-49d8-4597-8dc9-2366a94e2b5e"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"7611ce1a-3958-4bd7-abba-ee6d2264dfec","elementid":"a6651ec2-36a7-4756-b36b-11b6e46c81ef","modelid":"e2f02a27-49d8-4597-8dc9-2366a94e2b5e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
