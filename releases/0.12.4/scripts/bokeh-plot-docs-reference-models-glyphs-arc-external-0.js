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
      };var element = document.getElementById("051a621d-bd4e-46b5-b778-ddfe323ccd51");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '051a621d-bd4e-46b5-b778-ddfe323ccd51' but no matching script tag was found. ")
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
                var docs_json = {"89a4559a-c5a3-4cc2-a92f-7ccc86744e63":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","r","y"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"9578157b-354f-4e33-a708-1a70a4c91f60","type":"ColumnDataSource"},{"attributes":{},"id":"cd8ccd0f-9410-4e75-ae5f-562ca1172d84","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ac8aadda-839a-487c-9a54-e99543abcfb1","type":"DataRange1d"},{"attributes":{},"id":"d64a853c-3fe9-40d2-8be9-fd03c5ddbb55","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2e0c7cf2-5985-47a5-b4a6-ac10c9f8207a","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"95b9c3f5-3e35-4b2f-8a79-600b520b7638","type":"Plot"},"ticker":{"id":"cd8ccd0f-9410-4e75-ae5f-562ca1172d84","type":"BasicTicker"}},"id":"723ccb90-0eb9-480d-bb45-5d6c817e1d71","type":"Grid"},{"attributes":{"plot":{"id":"95b9c3f5-3e35-4b2f-8a79-600b520b7638","type":"Plot"},"ticker":{"id":"d64a853c-3fe9-40d2-8be9-fd03c5ddbb55","type":"BasicTicker"}},"id":"c3d65844-23f7-4850-a4eb-137328846ff6","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3823ff0-ff0f-4404-9f15-5abc65adb20e","type":"Arc"},{"attributes":{"below":[{"id":"e4b9f0c7-eacc-4828-8937-da544a013c49","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c1b15fcc-48cd-4d3c-8372-3f521dbb555e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"6ea61621-eba7-4541-9eaa-e50b1cf0808f","type":"GlyphRenderer"},{"id":"e4b9f0c7-eacc-4828-8937-da544a013c49","type":"LinearAxis"},{"id":"c1b15fcc-48cd-4d3c-8372-3f521dbb555e","type":"LinearAxis"},{"id":"c3d65844-23f7-4850-a4eb-137328846ff6","type":"Grid"},{"id":"723ccb90-0eb9-480d-bb45-5d6c817e1d71","type":"Grid"}],"title":null,"tool_events":{"id":"ae34f4e0-dc5e-4714-bf15-5756053f0ccf","type":"ToolEvents"},"toolbar":{"id":"5426b359-4fff-4656-8fd0-18b8c838198c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2e0c7cf2-5985-47a5-b4a6-ac10c9f8207a","type":"DataRange1d"},"y_range":{"id":"ac8aadda-839a-487c-9a54-e99543abcfb1","type":"DataRange1d"}},"id":"95b9c3f5-3e35-4b2f-8a79-600b520b7638","type":"Plot"},{"attributes":{"data_source":{"id":"9578157b-354f-4e33-a708-1a70a4c91f60","type":"ColumnDataSource"},"glyph":{"id":"d3823ff0-ff0f-4404-9f15-5abc65adb20e","type":"Arc"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ea61621-eba7-4541-9eaa-e50b1cf0808f","type":"GlyphRenderer"},{"attributes":{},"id":"ae34f4e0-dc5e-4714-bf15-5756053f0ccf","type":"ToolEvents"},{"attributes":{"formatter":{"id":"266d5e29-3366-443f-92d2-3dc7ff35b23b","type":"BasicTickFormatter"},"plot":{"id":"95b9c3f5-3e35-4b2f-8a79-600b520b7638","type":"Plot"},"ticker":{"id":"d64a853c-3fe9-40d2-8be9-fd03c5ddbb55","type":"BasicTicker"}},"id":"e4b9f0c7-eacc-4828-8937-da544a013c49","type":"LinearAxis"},{"attributes":{},"id":"bcae3772-8868-400e-ac7d-bf20f1b238a7","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5426b359-4fff-4656-8fd0-18b8c838198c","type":"Toolbar"},{"attributes":{"formatter":{"id":"bcae3772-8868-400e-ac7d-bf20f1b238a7","type":"BasicTickFormatter"},"plot":{"id":"95b9c3f5-3e35-4b2f-8a79-600b520b7638","type":"Plot"},"ticker":{"id":"cd8ccd0f-9410-4e75-ae5f-562ca1172d84","type":"BasicTicker"}},"id":"c1b15fcc-48cd-4d3c-8372-3f521dbb555e","type":"LinearAxis"},{"attributes":{},"id":"266d5e29-3366-443f-92d2-3dc7ff35b23b","type":"BasicTickFormatter"}],"root_ids":["95b9c3f5-3e35-4b2f-8a79-600b520b7638"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"89a4559a-c5a3-4cc2-a92f-7ccc86744e63","elementid":"051a621d-bd4e-46b5-b778-ddfe323ccd51","modelid":"95b9c3f5-3e35-4b2f-8a79-600b520b7638"}];
                
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
