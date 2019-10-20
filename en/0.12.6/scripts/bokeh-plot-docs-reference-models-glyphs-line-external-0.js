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
      };var element = document.getElementById("2c45a4ee-be8c-4a1b-8e8f-64ba0e8b0f5f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2c45a4ee-be8c-4a1b-8e8f-64ba0e8b0f5f' but no matching script tag was found. ")
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
                var docs_json = {"3c5363aa-677b-4a84-a13d-0a32ce87df9f":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec48a999-21ad-4b29-99fe-10dfd7fa4515","type":"Line"},{"attributes":{"formatter":{"id":"61f8b9d0-03e7-48d6-a19a-ebd02ba40cd4","type":"BasicTickFormatter"},"plot":{"id":"249f7c05-f31c-432b-b970-3347a6bea835","type":"Plot"},"ticker":{"id":"a2ed7794-7107-448f-aa6c-ccd05e43f81e","type":"BasicTicker"}},"id":"d535970f-4d3c-4c97-ae6c-f75e2a4fd78e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9c8b57a3-96c2-4334-add4-740215da6acc","type":"DataRange1d"},{"attributes":{"plot":{"id":"249f7c05-f31c-432b-b970-3347a6bea835","type":"Plot"},"ticker":{"id":"a2ed7794-7107-448f-aa6c-ccd05e43f81e","type":"BasicTicker"}},"id":"30a07b3b-b6c0-4d18-8ea5-58b71f5c2db9","type":"Grid"},{"attributes":{},"id":"881f96ef-1621-4bc5-8971-366f8faf57c5","type":"LinearScale"},{"attributes":{},"id":"61f8b9d0-03e7-48d6-a19a-ebd02ba40cd4","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4613f0d6-1b47-45f0-b788-8101fb11188e","type":"BasicTickFormatter"},"plot":{"id":"249f7c05-f31c-432b-b970-3347a6bea835","type":"Plot"},"ticker":{"id":"d3af41e7-0bde-4eda-a917-ef96464fbe15","type":"BasicTicker"}},"id":"ba182e83-106a-4720-a62d-566ea51ace4d","type":"LinearAxis"},{"attributes":{},"id":"2a972a5d-e18b-4c2c-9a76-b9359dee47b7","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"249f7c05-f31c-432b-b970-3347a6bea835","type":"Plot"},"ticker":{"id":"d3af41e7-0bde-4eda-a917-ef96464fbe15","type":"BasicTicker"}},"id":"edbfa33b-8a1e-446e-8e33-109591b47256","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"afb162d6-0415-4f65-903d-6e5b35fafb96","type":"Toolbar"},{"attributes":{"data_source":{"id":"86a64815-98ba-42bc-a5b0-1018ff641e00","type":"ColumnDataSource"},"glyph":{"id":"ec48a999-21ad-4b29-99fe-10dfd7fa4515","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"9ef91ec4-7729-40c2-9879-f2f763cc7795","type":"GlyphRenderer"},{"attributes":{},"id":"4613f0d6-1b47-45f0-b788-8101fb11188e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ee789ee0-b23c-49e3-ad24-1ea24f0d4876","type":"DataRange1d"},{"attributes":{},"id":"a2ed7794-7107-448f-aa6c-ccd05e43f81e","type":"BasicTicker"},{"attributes":{},"id":"78cb2799-067f-4bff-8580-ef7e912442a9","type":"ToolEvents"},{"attributes":{},"id":"d3af41e7-0bde-4eda-a917-ef96464fbe15","type":"BasicTicker"},{"attributes":{"below":[{"id":"d535970f-4d3c-4c97-ae6c-f75e2a4fd78e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ba182e83-106a-4720-a62d-566ea51ace4d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9ef91ec4-7729-40c2-9879-f2f763cc7795","type":"GlyphRenderer"},{"id":"d535970f-4d3c-4c97-ae6c-f75e2a4fd78e","type":"LinearAxis"},{"id":"ba182e83-106a-4720-a62d-566ea51ace4d","type":"LinearAxis"},{"id":"30a07b3b-b6c0-4d18-8ea5-58b71f5c2db9","type":"Grid"},{"id":"edbfa33b-8a1e-446e-8e33-109591b47256","type":"Grid"}],"title":null,"tool_events":{"id":"78cb2799-067f-4bff-8580-ef7e912442a9","type":"ToolEvents"},"toolbar":{"id":"afb162d6-0415-4f65-903d-6e5b35fafb96","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9c8b57a3-96c2-4334-add4-740215da6acc","type":"DataRange1d"},"x_scale":{"id":"2a972a5d-e18b-4c2c-9a76-b9359dee47b7","type":"LinearScale"},"y_range":{"id":"ee789ee0-b23c-49e3-ad24-1ea24f0d4876","type":"DataRange1d"},"y_scale":{"id":"881f96ef-1621-4bc5-8971-366f8faf57c5","type":"LinearScale"}},"id":"249f7c05-f31c-432b-b970-3347a6bea835","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}}},"id":"86a64815-98ba-42bc-a5b0-1018ff641e00","type":"ColumnDataSource"}],"root_ids":["249f7c05-f31c-432b-b970-3347a6bea835"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"3c5363aa-677b-4a84-a13d-0a32ce87df9f","elementid":"2c45a4ee-be8c-4a1b-8e8f-64ba0e8b0f5f","modelid":"249f7c05-f31c-432b-b970-3347a6bea835"}];
                
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
