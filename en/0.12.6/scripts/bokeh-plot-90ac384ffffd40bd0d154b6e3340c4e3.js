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
      };var element = document.getElementById("cc5badde-9692-45f1-8868-56044bc4d129");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc5badde-9692-45f1-8868-56044bc4d129' but no matching script tag was found. ")
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
                var docs_json = {"a6956430-5d35-42a7-b236-fe9c7bd9f84d":{"roots":{"references":[{"attributes":{"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"}},"id":"0ac40e02-06ae-4174-9abf-376c38b8de24","type":"ResetTool"},{"attributes":{},"id":"13e01a2c-111d-4423-97b8-ad99c7b58849","type":"ToolEvents"},{"attributes":{"formatter":{"id":"6368d2dc-ade8-4a60-9052-1323b21d55a5","type":"BasicTickFormatter"},"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"},"ticker":{"id":"887823e1-77c6-401e-b125-5222ba1251e4","type":"BasicTicker"}},"id":"9e369cb2-f1f8-4dfe-8490-4b430af84459","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"0748dce1-907e-4581-912c-f3724ddc0e30","type":"Title"},{"attributes":{"formatter":{"id":"a3abe125-2f65-40c2-9d92-a760f774923d","type":"BasicTickFormatter"},"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b0b6406-515d-4840-87e1-9f0166de337e","type":"BasicTicker"}},"id":"3397bafc-1e03-411d-9244-1261523d1de7","type":"LinearAxis"},{"attributes":{"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"}},"id":"05b5ef7f-4443-412c-9be2-3c31eb202e3e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"}},"id":"e9950b05-c01f-45c5-a2ff-18f522cb87be","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b0b6406-515d-4840-87e1-9f0166de337e","type":"BasicTicker"}},"id":"6b4d3442-f0b9-47e0-ad1a-28b36539f9d2","type":"Grid"},{"attributes":{},"id":"6368d2dc-ade8-4a60-9052-1323b21d55a5","type":"BasicTickFormatter"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc65b831-d88f-4211-bcef-80c30a41475a","type":"Ray"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"908d841f-31e9-453e-a9c8-c7e94c6e70f1","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"9e369cb2-f1f8-4dfe-8490-4b430af84459","type":"LinearAxis"}],"left":[{"id":"3397bafc-1e03-411d-9244-1261523d1de7","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9e369cb2-f1f8-4dfe-8490-4b430af84459","type":"LinearAxis"},{"id":"b5a74cd0-5774-4dcf-970e-ef5f4826aad7","type":"Grid"},{"id":"3397bafc-1e03-411d-9244-1261523d1de7","type":"LinearAxis"},{"id":"6b4d3442-f0b9-47e0-ad1a-28b36539f9d2","type":"Grid"},{"id":"908d841f-31e9-453e-a9c8-c7e94c6e70f1","type":"BoxAnnotation"},{"id":"4a49d1a2-c16a-45ed-899c-cab7af17aacf","type":"GlyphRenderer"}],"title":{"id":"0748dce1-907e-4581-912c-f3724ddc0e30","type":"Title"},"tool_events":{"id":"13e01a2c-111d-4423-97b8-ad99c7b58849","type":"ToolEvents"},"toolbar":{"id":"257782a6-367e-4bb4-8718-c136e713f6b6","type":"Toolbar"},"x_range":{"id":"adfaa0ab-390c-4312-84f6-158fed6c369d","type":"DataRange1d"},"x_scale":{"id":"c44d8881-13a4-499e-a1d9-8d2cfed2180c","type":"LinearScale"},"y_range":{"id":"353397cd-e3a1-4309-8824-fcfd8ddc145f","type":"DataRange1d"},"y_scale":{"id":"494e2d3c-f66d-4951-9bae-0fbf06973da5","type":"LinearScale"}},"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"887823e1-77c6-401e-b125-5222ba1251e4","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","angle"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"1d67d118-45ff-4c0d-b626-c90e5b6cbca9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"}},"id":"595fa0a2-e2c7-4ecb-95ed-38c7a82dc451","type":"SaveTool"},{"attributes":{},"id":"a3abe125-2f65-40c2-9d92-a760f774923d","type":"BasicTickFormatter"},{"attributes":{},"id":"9b0b6406-515d-4840-87e1-9f0166de337e","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1d67d118-45ff-4c0d-b626-c90e5b6cbca9","type":"ColumnDataSource"},"glyph":{"id":"d83bff00-4841-4b0d-94ec-4692dc89d31c","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc65b831-d88f-4211-bcef-80c30a41475a","type":"Ray"},"selection_glyph":null},"id":"4a49d1a2-c16a-45ed-899c-cab7af17aacf","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"353397cd-e3a1-4309-8824-fcfd8ddc145f","type":"DataRange1d"},{"attributes":{"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"},"ticker":{"id":"887823e1-77c6-401e-b125-5222ba1251e4","type":"BasicTicker"}},"id":"b5a74cd0-5774-4dcf-970e-ef5f4826aad7","type":"Grid"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d83bff00-4841-4b0d-94ec-4692dc89d31c","type":"Ray"},{"attributes":{"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"}},"id":"e6c877f1-7a17-4564-a7b3-2a4a6c754a07","type":"HelpTool"},{"attributes":{"callback":null},"id":"adfaa0ab-390c-4312-84f6-158fed6c369d","type":"DataRange1d"},{"attributes":{},"id":"c44d8881-13a4-499e-a1d9-8d2cfed2180c","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e9950b05-c01f-45c5-a2ff-18f522cb87be","type":"PanTool"},{"id":"05b5ef7f-4443-412c-9be2-3c31eb202e3e","type":"WheelZoomTool"},{"id":"5903fd05-78bf-43fc-bf00-4ff5cf55b717","type":"BoxZoomTool"},{"id":"595fa0a2-e2c7-4ecb-95ed-38c7a82dc451","type":"SaveTool"},{"id":"0ac40e02-06ae-4174-9abf-376c38b8de24","type":"ResetTool"},{"id":"e6c877f1-7a17-4564-a7b3-2a4a6c754a07","type":"HelpTool"}]},"id":"257782a6-367e-4bb4-8718-c136e713f6b6","type":"Toolbar"},{"attributes":{"overlay":{"id":"908d841f-31e9-453e-a9c8-c7e94c6e70f1","type":"BoxAnnotation"},"plot":{"id":"56a25ad6-8a8c-489f-9020-257096f69e9d","subtype":"Figure","type":"Plot"}},"id":"5903fd05-78bf-43fc-bf00-4ff5cf55b717","type":"BoxZoomTool"},{"attributes":{},"id":"494e2d3c-f66d-4951-9bae-0fbf06973da5","type":"LinearScale"}],"root_ids":["56a25ad6-8a8c-489f-9020-257096f69e9d"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"a6956430-5d35-42a7-b236-fe9c7bd9f84d","elementid":"cc5badde-9692-45f1-8868-56044bc4d129","modelid":"56a25ad6-8a8c-489f-9020-257096f69e9d"}];
                
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
