document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("02200313-7630-45e8-81c8-c6c066ee89f4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '02200313-7630-45e8-81c8-c6c066ee89f4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"7e681695-67a0-42ce-adcf-2c323104dd4d":{"roots":{"references":[{"attributes":{"overlay":{"id":"65637020-6778-41d7-bb5c-b3cbdd5f676c","type":"BoxAnnotation"},"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"}},"id":"2f1dd83c-3ac0-4d0c-a2db-34a988fbe659","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"f5fcfbcd-c49a-4ac2-9d2b-0f30e09fe2c6","type":"ColumnDataSource"},"glyph":{"id":"1bc3dd4c-e15f-4887-ba42-82c1ee720c5f","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"1ca7d46b-d04c-4b5c-a98f-de7a2ac919f9","type":"Wedge"},"selection_glyph":null},"id":"c0f69b6d-fb09-42b7-8612-84fa769b928e","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ded0683-9664-4cea-9c09-ce0b62310c6b","type":"BasicTicker"}},"id":"69c12f34-c19a-4831-a0bb-dd7f75a10c91","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ca7d46b-d04c-4b5c-a98f-de7a2ac919f9","type":"Wedge"},{"attributes":{},"id":"2ded0683-9664-4cea-9c09-ce0b62310c6b","type":"BasicTicker"},{"attributes":{},"id":"662b089a-2b23-468f-86e5-a33f0a374b57","type":"BasicTickFormatter"},{"attributes":{},"id":"b46f1bf5-cc52-4a1b-aa42-3ceb57f9d47e","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"1bc3dd4c-e15f-4887-ba42-82c1ee720c5f","type":"Wedge"},{"attributes":{"formatter":{"id":"b46f1bf5-cc52-4a1b-aa42-3ceb57f9d47e","type":"BasicTickFormatter"},"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1e2514b-d49a-49d0-81eb-b874eaf719a5","type":"BasicTicker"}},"id":"0f461678-8274-402d-837e-2bd4d8b55d60","type":"LinearAxis"},{"attributes":{"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"}},"id":"1836d629-935a-4224-81ee-bb3f22633424","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"896a0b34-1df2-441b-8a0e-97f05025fd8d","type":"PanTool"},{"id":"1836d629-935a-4224-81ee-bb3f22633424","type":"WheelZoomTool"},{"id":"2f1dd83c-3ac0-4d0c-a2db-34a988fbe659","type":"BoxZoomTool"},{"id":"eeef8ca3-511a-4657-89bc-7f9bae9bb2f2","type":"SaveTool"},{"id":"a07d62ed-1b78-4344-aedf-0879b48e5662","type":"ResetTool"},{"id":"28d93e66-0fa3-430d-8e2a-fd934b3f9b77","type":"HelpTool"}]},"id":"94770463-e987-4797-a2cc-3c179c6883f1","type":"Toolbar"},{"attributes":{"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"}},"id":"896a0b34-1df2-441b-8a0e-97f05025fd8d","type":"PanTool"},{"attributes":{"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1e2514b-d49a-49d0-81eb-b874eaf719a5","type":"BasicTicker"}},"id":"650b0a22-9d08-48cb-a1d3-47242409f414","type":"Grid"},{"attributes":{},"id":"b1e2514b-d49a-49d0-81eb-b874eaf719a5","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"65637020-6778-41d7-bb5c-b3cbdd5f676c","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"721672be-da17-4b67-b32a-eaf1130b614d","type":"DataRange1d"},{"attributes":{"callback":null},"id":"5a74e162-a97a-47a9-9af5-e0afe3d0bf2d","type":"DataRange1d"},{"attributes":{"below":[{"id":"0f461678-8274-402d-837e-2bd4d8b55d60","type":"LinearAxis"}],"left":[{"id":"a9f5bada-4bad-4a9b-92da-4f5f80a1f851","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0f461678-8274-402d-837e-2bd4d8b55d60","type":"LinearAxis"},{"id":"650b0a22-9d08-48cb-a1d3-47242409f414","type":"Grid"},{"id":"a9f5bada-4bad-4a9b-92da-4f5f80a1f851","type":"LinearAxis"},{"id":"69c12f34-c19a-4831-a0bb-dd7f75a10c91","type":"Grid"},{"id":"65637020-6778-41d7-bb5c-b3cbdd5f676c","type":"BoxAnnotation"},{"id":"c0f69b6d-fb09-42b7-8612-84fa769b928e","type":"GlyphRenderer"}],"title":{"id":"f4d74156-53ce-42ae-98af-c3bb69fc1012","type":"Title"},"tool_events":{"id":"cde0c12e-d64e-4301-83db-1bb1f74518b5","type":"ToolEvents"},"toolbar":{"id":"94770463-e987-4797-a2cc-3c179c6883f1","type":"Toolbar"},"x_range":{"id":"5a74e162-a97a-47a9-9af5-e0afe3d0bf2d","type":"DataRange1d"},"y_range":{"id":"721672be-da17-4b67-b32a-eaf1130b614d","type":"DataRange1d"}},"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"}},"id":"eeef8ca3-511a-4657-89bc-7f9bae9bb2f2","type":"SaveTool"},{"attributes":{"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"}},"id":"28d93e66-0fa3-430d-8e2a-fd934b3f9b77","type":"HelpTool"},{"attributes":{"formatter":{"id":"662b089a-2b23-468f-86e5-a33f0a374b57","type":"BasicTickFormatter"},"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ded0683-9664-4cea-9c09-ce0b62310c6b","type":"BasicTicker"}},"id":"a9f5bada-4bad-4a9b-92da-4f5f80a1f851","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"f4d74156-53ce-42ae-98af-c3bb69fc1012","type":"Title"},{"attributes":{"plot":{"id":"8cac7e48-f5aa-439b-ae8b-638e00827d61","subtype":"Figure","type":"Plot"}},"id":"a07d62ed-1b78-4344-aedf-0879b48e5662","type":"ResetTool"},{"attributes":{},"id":"cde0c12e-d64e-4301-83db-1bb1f74518b5","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"f5fcfbcd-c49a-4ac2-9d2b-0f30e09fe2c6","type":"ColumnDataSource"}],"root_ids":["8cac7e48-f5aa-439b-ae8b-638e00827d61"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"7e681695-67a0-42ce-adcf-2c323104dd4d","elementid":"02200313-7630-45e8-81c8-c6c066ee89f4","modelid":"8cac7e48-f5aa-439b-ae8b-638e00827d61"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});