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
      };var element = document.getElementById("dd511e10-cff7-44f6-8a96-9abe1f46f2f8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dd511e10-cff7-44f6-8a96-9abe1f46f2f8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"8afe5e69-7415-414e-a095-0282c00d24bf":{"roots":{"references":[{"attributes":{"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"}},"id":"0661d214-0e38-4724-9e8e-83009b647ef7","type":"PanTool"},{"attributes":{"data_source":{"id":"735df1b8-861c-49e8-bf2a-79013326d6b0","type":"ColumnDataSource"},"glyph":{"id":"d5c44918-ff59-46df-962a-82efeefa33b4","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"48b49276-3ae6-42c9-93c0-551721be5bc1","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d0bad999-00d0-41fc-8f0f-633e48e6fce3","type":"Line"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"a3fce430-e304-4540-914f-b5f83473b048","type":"Title"},{"attributes":{"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"}},"id":"782c5096-1a53-44df-a910-7b3c6826f85b","type":"SaveTool"},{"attributes":{"label":{"value":"postcard"},"renderers":[{"id":"a2304628-b443-4b7c-a08e-5ff2c43858ce","type":"GlyphRenderer"}]},"id":"eeefee03-7ade-437d-b174-ad029f23ff1d","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":{"__ndarray__":"H4XrUbge1T8fhetRuB7VPx+F61G4HtU/H4XrUbge1T/D9Shcj8LVP8P1KFyPwtU/rkfhehSu1z+uR+F6FK7XP65H4XoUrtc/rkfhehSu1z+uR+F6FK7XP65H4XoUrtc/rkfhehSu1z+uR+F6FK7XP/YoXI/C9dg/9ihcj8L12D89CtejcD3aPz0K16NwPdo/4XoUrkfh2j/hehSuR+HaPylcj8L1KNw/KVyPwvUo3D8pXI/C9SjcPylcj8L1KNw/KVyPwvUo3D8pXI/C9SjcP83MzMzMzNw/zczMzMzM3D9xPQrXo3DdP3E9CtejcN0/XI/C9Shc3z9cj8L1KFzfP1yPwvUoXN8/","dtype":"float64","shape":[33]}}},"id":"735df1b8-861c-49e8-bf2a-79013326d6b0","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"d8a88cb7-ff40-4b1e-9e7e-85feba340764","type":"Range1d"},{"attributes":{},"id":"608ea1b6-34d6-4570-8a26-fce3b89fb8e5","type":"BasicTicker"},{"attributes":{"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"}},"id":"f82063dc-513d-426a-b3b8-28d8dced46ad","type":"ResetTool"},{"attributes":{"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"},"ticker":{"id":"608ea1b6-34d6-4570-8a26-fce3b89fb8e5","type":"BasicTicker"}},"id":"cf5b1210-3f06-4430-8593-629fccdcc2cb","type":"Grid"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"76ec4358-d3fe-42ef-957c-1cf41ec9359b","type":"BasicTickFormatter"},"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"},"ticker":{"id":"1d6ba191-0350-4417-8440-257dfef027d4","type":"BasicTicker"}},"id":"f07b99bf-58e0-459c-8395-17c4bf416c2f","type":"LinearAxis"},{"attributes":{},"id":"1d6ba191-0350-4417-8440-257dfef027d4","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"663b8e0b-93ea-40e4-a401-7579b660058b","type":"BoxAnnotation"},{"attributes":{"axis_label":"index","formatter":{"id":"791ce4d6-54c4-4c77-8897-563cdf662a2f","type":"BasicTickFormatter"},"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"},"ticker":{"id":"608ea1b6-34d6-4570-8a26-fce3b89fb8e5","type":"BasicTicker"}},"id":"0e1766be-77df-4eba-bfd9-a0a7b2b950bc","type":"LinearAxis"},{"attributes":{"items":[{"id":"c473614c-5424-4093-bb3c-a6180692f0e4","type":"LegendItem"},{"id":"eeefee03-7ade-437d-b174-ad029f23ff1d","type":"LegendItem"}],"location":"top_left","plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"}},"id":"99a4c0c1-d517-4214-b2d3-1d84048aa30b","type":"Legend"},{"attributes":{"below":[{"id":"0e1766be-77df-4eba-bfd9-a0a7b2b950bc","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"f07b99bf-58e0-459c-8395-17c4bf416c2f","type":"LinearAxis"}],"renderers":[{"id":"663b8e0b-93ea-40e4-a401-7579b660058b","type":"BoxAnnotation"},{"id":"48b49276-3ae6-42c9-93c0-551721be5bc1","type":"GlyphRenderer"},{"id":"a2304628-b443-4b7c-a08e-5ff2c43858ce","type":"GlyphRenderer"},{"id":"99a4c0c1-d517-4214-b2d3-1d84048aa30b","type":"Legend"},{"id":"0e1766be-77df-4eba-bfd9-a0a7b2b950bc","type":"LinearAxis"},{"id":"f07b99bf-58e0-459c-8395-17c4bf416c2f","type":"LinearAxis"},{"id":"cf5b1210-3f06-4430-8593-629fccdcc2cb","type":"Grid"},{"id":"53f7014f-e417-40c7-861d-2e12e0fb4cf0","type":"Grid"}],"title":{"id":"a3fce430-e304-4540-914f-b5f83473b048","type":"Title"},"tool_events":{"id":"98a6731e-02a1-4c34-b831-0ba60e9e8ff4","type":"ToolEvents"},"toolbar":{"id":"47a6ac7c-761e-47c4-9d55-155466ff77eb","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"f08e5784-d0f1-4bd6-8210-6d96a1d2edcd","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"d8a88cb7-ff40-4b1e-9e7e-85feba340764","type":"Range1d"}},"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"},"ticker":{"id":"1d6ba191-0350-4417-8440-257dfef027d4","type":"BasicTicker"}},"id":"53f7014f-e417-40c7-861d-2e12e0fb4cf0","type":"Grid"},{"attributes":{"label":{"value":"stamp"},"renderers":[{"id":"48b49276-3ae6-42c9-93c0-551721be5bc1","type":"GlyphRenderer"}]},"id":"c473614c-5424-4093-bb3c-a6180692f0e4","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT/hehSuR+HKP+F6FK5H4co/cT0K16NwzT9xPQrXo3DNP3E9CtejcM0/cT0K16NwzT9xPQrXo3DNP3E9CtejcM0/cT0K16NwzT9xPQrXo3DNP7gehetRuM4/uB6F61G4zj+kcD0K16PQP6RwPQrXo9A/SOF6FK5H0T9I4XoUrkfRP+xRuB6F69E/7FG4HoXr0T/sUbgehevRP+xRuB6F69E/j8L1KFyP0j+PwvUoXI/SP3sUrkfhetQ/exSuR+F61D8fhetRuB7VPx+F61G4HtU/w/UoXI/C1T/D9Shcj8LVP2ZmZmZmZtY/","dtype":"float64","shape":[33]}}},"id":"8dd69976-c309-49e0-b048-b2819e783553","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0661d214-0e38-4724-9e8e-83009b647ef7","type":"PanTool"},{"id":"1701e276-6bee-463b-b631-bce66f8ef3d0","type":"WheelZoomTool"},{"id":"cebec7f4-18c4-41ce-9ebf-1c7b23e1467e","type":"BoxZoomTool"},{"id":"782c5096-1a53-44df-a910-7b3c6826f85b","type":"SaveTool"},{"id":"f82063dc-513d-426a-b3b8-28d8dced46ad","type":"ResetTool"},{"id":"72b7315f-ec1f-4c3e-91a5-79ecccbb7933","type":"HelpTool"}]},"id":"47a6ac7c-761e-47c4-9d55-155466ff77eb","type":"Toolbar"},{"attributes":{"overlay":{"id":"663b8e0b-93ea-40e4-a401-7579b660058b","type":"BoxAnnotation"},"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"}},"id":"cebec7f4-18c4-41ce-9ebf-1c7b23e1467e","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"}},"id":"72b7315f-ec1f-4c3e-91a5-79ecccbb7933","type":"HelpTool"},{"attributes":{},"id":"76ec4358-d3fe-42ef-957c-1cf41ec9359b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8dd69976-c309-49e0-b048-b2819e783553","type":"ColumnDataSource"},"glyph":{"id":"d0bad999-00d0-41fc-8f0f-633e48e6fce3","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"a2304628-b443-4b7c-a08e-5ff2c43858ce","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9e037ff1-5036-46a7-91f6-f24fdb54a29d","subtype":"Chart","type":"Plot"}},"id":"1701e276-6bee-463b-b631-bce66f8ef3d0","type":"WheelZoomTool"},{"attributes":{},"id":"791ce4d6-54c4-4c77-8897-563cdf662a2f","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d5c44918-ff59-46df-962a-82efeefa33b4","type":"Line"},{"attributes":{},"id":"98a6731e-02a1-4c34-b831-0ba60e9e8ff4","type":"ToolEvents"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"f08e5784-d0f1-4bd6-8210-6d96a1d2edcd","type":"Range1d"}],"root_ids":["9e037ff1-5036-46a7-91f6-f24fdb54a29d"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"8afe5e69-7415-414e-a095-0282c00d24bf","elementid":"dd511e10-cff7-44f6-8a96-9abe1f46f2f8","modelid":"9e037ff1-5036-46a7-91f6-f24fdb54a29d"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
