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
      };var element = document.getElementById("aa382d64-711f-47f4-ab68-74e3cb1fac49");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa382d64-711f-47f4-ab68-74e3cb1fac49' but no matching script tag was found. ")
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
                var docs_json = {"08bea2bf-0041-479a-bbe8-c63caa564fac":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"dbaab8d0-a152-4807-be22-944c3dc7d53c","type":"Toolbar"},{"attributes":{"formatter":{"id":"41552e76-0a2b-42f4-9d27-30c4af11d3b2","type":"BasicTickFormatter"},"plot":{"id":"48930ece-0722-4f86-be9a-b3df4a926b70","type":"Plot"},"ticker":{"id":"fdcaf4d8-768d-4a04-8fb2-3437ff11590d","type":"BasicTicker"}},"id":"87c6bcae-2c5a-48c6-ad34-dfa0426d8fb3","type":"LinearAxis"},{"attributes":{},"id":"d81ed51e-e9a7-4a52-949b-62eb1aa527fd","type":"ToolEvents"},{"attributes":{"callback":null},"id":"a735d5b6-0bdc-4fc0-b744-e3e62cc2c5c5","type":"DataRange1d"},{"attributes":{},"id":"8db6f529-7e0f-4397-84e3-7caca3812d57","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d115ce7f-91b8-48ee-8032-22b9bedac006","type":"DataRange1d"},{"attributes":{},"id":"41552e76-0a2b-42f4-9d27-30c4af11d3b2","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"73e15084-9326-4e4d-b401-e9119f5d56dd","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"87c6bcae-2c5a-48c6-ad34-dfa0426d8fb3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9cba1a0e-a83f-4501-8e91-de392d899c85","type":"GlyphRenderer"},{"id":"73e15084-9326-4e4d-b401-e9119f5d56dd","type":"LinearAxis"},{"id":"87c6bcae-2c5a-48c6-ad34-dfa0426d8fb3","type":"LinearAxis"},{"id":"38f0f7b6-b94f-4407-acd6-98609e62660c","type":"Grid"},{"id":"7bd56f61-7961-409a-a818-fa18683f0b48","type":"Grid"}],"title":null,"tool_events":{"id":"d81ed51e-e9a7-4a52-949b-62eb1aa527fd","type":"ToolEvents"},"toolbar":{"id":"dbaab8d0-a152-4807-be22-944c3dc7d53c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d115ce7f-91b8-48ee-8032-22b9bedac006","type":"DataRange1d"},"y_range":{"id":"a735d5b6-0bdc-4fc0-b744-e3e62cc2c5c5","type":"DataRange1d"}},"id":"48930ece-0722-4f86-be9a-b3df4a926b70","type":"Plot"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"87c1eacc-ca21-4a2f-820f-12993851592e","type":"Cross"},{"attributes":{"plot":{"id":"48930ece-0722-4f86-be9a-b3df4a926b70","type":"Plot"},"ticker":{"id":"8db6f529-7e0f-4397-84e3-7caca3812d57","type":"BasicTicker"}},"id":"38f0f7b6-b94f-4407-acd6-98609e62660c","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"48930ece-0722-4f86-be9a-b3df4a926b70","type":"Plot"},"ticker":{"id":"fdcaf4d8-768d-4a04-8fb2-3437ff11590d","type":"BasicTicker"}},"id":"7bd56f61-7961-409a-a818-fa18683f0b48","type":"Grid"},{"attributes":{},"id":"2e2681b2-4a66-4926-8159-ee0fadde2d30","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a54d5444-4cab-4790-a9eb-89e6d48dc3c1","type":"ColumnDataSource"},"glyph":{"id":"87c1eacc-ca21-4a2f-820f-12993851592e","type":"Cross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9cba1a0e-a83f-4501-8e91-de392d899c85","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","sizes","y"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"a54d5444-4cab-4790-a9eb-89e6d48dc3c1","type":"ColumnDataSource"},{"attributes":{},"id":"fdcaf4d8-768d-4a04-8fb2-3437ff11590d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2e2681b2-4a66-4926-8159-ee0fadde2d30","type":"BasicTickFormatter"},"plot":{"id":"48930ece-0722-4f86-be9a-b3df4a926b70","type":"Plot"},"ticker":{"id":"8db6f529-7e0f-4397-84e3-7caca3812d57","type":"BasicTicker"}},"id":"73e15084-9326-4e4d-b401-e9119f5d56dd","type":"LinearAxis"}],"root_ids":["48930ece-0722-4f86-be9a-b3df4a926b70"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"08bea2bf-0041-479a-bbe8-c63caa564fac","elementid":"aa382d64-711f-47f4-ab68-74e3cb1fac49","modelid":"48930ece-0722-4f86-be9a-b3df4a926b70"}];
                
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
