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
      };var element = document.getElementById("5b0611fc-3891-4c03-9bd3-9d706d3b8edb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5b0611fc-3891-4c03-9bd3-9d706d3b8edb' but no matching script tag was found. ")
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
                var docs_json = {"9f2be596-1baf-43f2-b9e9-87174ec541a5":{"roots":{"references":[{"attributes":{"below":[{"id":"12231680-a48e-42e2-8dd5-e85c243a6c9f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b9b9cb6f-ac53-455d-b308-118679f670fa","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"25e35ab5-5f4e-49e5-8254-0500152ae761","type":"GlyphRenderer"},{"id":"12231680-a48e-42e2-8dd5-e85c243a6c9f","type":"LinearAxis"},{"id":"b9b9cb6f-ac53-455d-b308-118679f670fa","type":"LinearAxis"},{"id":"22f227fb-a535-49de-a1e9-08111ae688bf","type":"Grid"},{"id":"7b90c34a-6a62-4f8b-aae0-20ab08eb19c6","type":"Grid"}],"title":null,"tool_events":{"id":"4ffd0972-4c76-493f-9b98-32020d43d233","type":"ToolEvents"},"toolbar":{"id":"06252b3f-32cd-4035-ae06-0f7d73a04b19","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0570b433-de9a-446c-8a1c-75e2620980dc","type":"DataRange1d"},"y_range":{"id":"255a678e-0764-45eb-baa6-ad9c001228ba","type":"DataRange1d"}},"id":"0ca3909b-4383-4bad-9c5e-e0e6985d0e81","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABAAAAAAAAAAECMsNzTCMv9PxphuacRlvs/qBGWexph+T80wnJPIyz3P8JyTyMs9/Q/UCMs9zTC8j/c0wjLPY3wP9QIyz2NsOw/8GmE5Z5G6D8Iyz2NsNzjP0hY7mmE5d4/eBphuacR1j9guacRlnvKP6B7GmG5p7E/oHsaYbmnsb9guacRlnvKv3waYbmnEda/SFjuaYTl3r8Iyz2NsNzjv+5phOWeRui/1AjLPY2w7L/d0wjLPY3wv1AjLPc0wvK/wnJPIyz39L81wnJPIyz3v6gRlnsaYfm/GmG5pxGW+7+NsNzTCMv9vwAAAAAAAADA","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBAZmZmZmZmIECkMMUdEx4eQMqiBv9PlhtAQCORcIM1GUACsmRyrfsWQBVPgQTO6BRAdvrmJuX8EkAktJXZ8jcRQEX4GjnuMw9A3qSc3+NFDEASbrCmxqUJQOVTVo6WUwdAVFaOllNPBUBhdVi//ZgDQAuxtAiVMAJAUQmjchkWAUA1fiP9ikkAQGsfbFDTlf8/pnu152o0/z8cESPA3G7/P+Zv2myUIgBA23M1mqfbAEBulCLop+IBQJ3RoVaVNwNAaCuz5W/aBEDSoVaVN8sGQNk0jGXsCQlAe+RTVo6WC0C8sK1nHXEOQM3MzMzMzBBA","dtype":"float64","shape":[60]}}},"id":"fbe2bed0-3cbb-44b9-bf78-1bdb6d8c9adb","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"0570b433-de9a-446c-8a1c-75e2620980dc","type":"DataRange1d"},{"attributes":{},"id":"1d4819ef-b1d9-43d1-b789-9ca51f197af0","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a4647b4-39af-48bf-aa01-5815b7b72e8c","type":"Patch"},{"attributes":{"formatter":{"id":"b4efb669-ec7f-4891-a38a-f14bd3084690","type":"BasicTickFormatter"},"plot":{"id":"0ca3909b-4383-4bad-9c5e-e0e6985d0e81","type":"Plot"},"ticker":{"id":"1d4819ef-b1d9-43d1-b789-9ca51f197af0","type":"BasicTicker"}},"id":"b9b9cb6f-ac53-455d-b308-118679f670fa","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"0ca3909b-4383-4bad-9c5e-e0e6985d0e81","type":"Plot"},"ticker":{"id":"1d4819ef-b1d9-43d1-b789-9ca51f197af0","type":"BasicTicker"}},"id":"7b90c34a-6a62-4f8b-aae0-20ab08eb19c6","type":"Grid"},{"attributes":{},"id":"54720a0d-9bb0-4707-b0ef-fb6bd49655af","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"54720a0d-9bb0-4707-b0ef-fb6bd49655af","type":"BasicTickFormatter"},"plot":{"id":"0ca3909b-4383-4bad-9c5e-e0e6985d0e81","type":"Plot"},"ticker":{"id":"aac199f9-fe8f-4c4c-8ca5-ef46a87297f5","type":"BasicTicker"}},"id":"12231680-a48e-42e2-8dd5-e85c243a6c9f","type":"LinearAxis"},{"attributes":{"plot":{"id":"0ca3909b-4383-4bad-9c5e-e0e6985d0e81","type":"Plot"},"ticker":{"id":"aac199f9-fe8f-4c4c-8ca5-ef46a87297f5","type":"BasicTicker"}},"id":"22f227fb-a535-49de-a1e9-08111ae688bf","type":"Grid"},{"attributes":{},"id":"b4efb669-ec7f-4891-a38a-f14bd3084690","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"fbe2bed0-3cbb-44b9-bf78-1bdb6d8c9adb","type":"ColumnDataSource"},"glyph":{"id":"9a4647b4-39af-48bf-aa01-5815b7b72e8c","type":"Patch"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"25e35ab5-5f4e-49e5-8254-0500152ae761","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"06252b3f-32cd-4035-ae06-0f7d73a04b19","type":"Toolbar"},{"attributes":{},"id":"aac199f9-fe8f-4c4c-8ca5-ef46a87297f5","type":"BasicTicker"},{"attributes":{"callback":null},"id":"255a678e-0764-45eb-baa6-ad9c001228ba","type":"DataRange1d"},{"attributes":{},"id":"4ffd0972-4c76-493f-9b98-32020d43d233","type":"ToolEvents"}],"root_ids":["0ca3909b-4383-4bad-9c5e-e0e6985d0e81"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"9f2be596-1baf-43f2-b9e9-87174ec541a5","elementid":"5b0611fc-3891-4c03-9bd3-9d706d3b8edb","modelid":"0ca3909b-4383-4bad-9c5e-e0e6985d0e81"}];
                
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
