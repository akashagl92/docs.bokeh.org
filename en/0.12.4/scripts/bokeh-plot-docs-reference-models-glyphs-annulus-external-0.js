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
      };var element = document.getElementById("f29a249a-dda2-49a8-8a67-fcb388cf1a46");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f29a249a-dda2-49a8-8a67-fcb388cf1a46' but no matching script tag was found. ")
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
                var docs_json = {"913be608-b07e-4e6f-a1a9-5c934ef2c693":{"roots":{"references":[{"attributes":{},"id":"671ce89f-c977-4fc9-acee-d5f6ada871dd","type":"BasicTickFormatter"},{"attributes":{},"id":"0cadd807-b836-40f4-bd7a-d1c4acfd0b92","type":"ToolEvents"},{"attributes":{"below":[{"id":"d3e88fd2-abda-49ba-931c-8ed9aaf4b9cb","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6fde48aa-370b-443b-be95-012ba5a63217","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dad4774d-34ae-4b33-bedd-ff85de25314b","type":"GlyphRenderer"},{"id":"d3e88fd2-abda-49ba-931c-8ed9aaf4b9cb","type":"LinearAxis"},{"id":"6fde48aa-370b-443b-be95-012ba5a63217","type":"LinearAxis"},{"id":"f268f510-7073-426e-959c-49439daea49b","type":"Grid"},{"id":"a321c757-a780-4cd0-9631-bc4a4051a270","type":"Grid"}],"title":null,"tool_events":{"id":"0cadd807-b836-40f4-bd7a-d1c4acfd0b92","type":"ToolEvents"},"toolbar":{"id":"58dd04e3-be2a-42da-a74d-66df87551a4d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f0304512-9032-4fb9-b95a-eaa725323693","type":"DataRange1d"},"y_range":{"id":"c8ff466f-4e92-4dad-8029-f9c74578231b","type":"DataRange1d"}},"id":"e1804632-a080-43a7-ab05-54fd73fbe26c","type":"Plot"},{"attributes":{"data_source":{"id":"421ab255-feee-4c25-a36d-efefe1f44ab9","type":"ColumnDataSource"},"glyph":{"id":"f50cd707-c33c-4f64-91d5-1b82e7678b94","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dad4774d-34ae-4b33-bedd-ff85de25314b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"a2334441-80e5-42b7-a8cf-0ee9b58a9fbe","type":"BasicTickFormatter"},"plot":{"id":"e1804632-a080-43a7-ab05-54fd73fbe26c","type":"Plot"},"ticker":{"id":"12b97d47-eaae-44cc-b6dd-d5a3c194a80a","type":"BasicTicker"}},"id":"6fde48aa-370b-443b-be95-012ba5a63217","type":"LinearAxis"},{"attributes":{},"id":"12b97d47-eaae-44cc-b6dd-d5a3c194a80a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f0304512-9032-4fb9-b95a-eaa725323693","type":"DataRange1d"},{"attributes":{},"id":"99b992d5-3b6e-45aa-819c-e5d0dccbd8c2","type":"BasicTicker"},{"attributes":{},"id":"a2334441-80e5-42b7-a8cf-0ee9b58a9fbe","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e1804632-a080-43a7-ab05-54fd73fbe26c","type":"Plot"},"ticker":{"id":"99b992d5-3b6e-45aa-819c-e5d0dccbd8c2","type":"BasicTicker"}},"id":"f268f510-7073-426e-959c-49439daea49b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"421ab255-feee-4c25-a36d-efefe1f44ab9","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"e1804632-a080-43a7-ab05-54fd73fbe26c","type":"Plot"},"ticker":{"id":"12b97d47-eaae-44cc-b6dd-d5a3c194a80a","type":"BasicTicker"}},"id":"a321c757-a780-4cd0-9631-bc4a4051a270","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"58dd04e3-be2a-42da-a74d-66df87551a4d","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"f50cd707-c33c-4f64-91d5-1b82e7678b94","type":"Annulus"},{"attributes":{"formatter":{"id":"671ce89f-c977-4fc9-acee-d5f6ada871dd","type":"BasicTickFormatter"},"plot":{"id":"e1804632-a080-43a7-ab05-54fd73fbe26c","type":"Plot"},"ticker":{"id":"99b992d5-3b6e-45aa-819c-e5d0dccbd8c2","type":"BasicTicker"}},"id":"d3e88fd2-abda-49ba-931c-8ed9aaf4b9cb","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c8ff466f-4e92-4dad-8029-f9c74578231b","type":"DataRange1d"}],"root_ids":["e1804632-a080-43a7-ab05-54fd73fbe26c"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"913be608-b07e-4e6f-a1a9-5c934ef2c693","elementid":"f29a249a-dda2-49a8-8a67-fcb388cf1a46","modelid":"e1804632-a080-43a7-ab05-54fd73fbe26c"}];
                
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
