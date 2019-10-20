document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("2885b040-8f9a-4d2a-a546-80e7de81ea81");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2885b040-8f9a-4d2a-a546-80e7de81ea81' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6bb39c1b-1734-4676-b05c-c8bc530daba1":{"roots":{"references":[{"attributes":{"formatter":{"id":"11869cce-e48d-4fe9-bfbf-834068f403af","type":"BasicTickFormatter"},"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad580b72-6c65-44d1-a3c8-215242203797","type":"BasicTicker"}},"id":"23fd35c1-ef35-41d2-95f0-604701cd82e5","type":"LinearAxis"},{"attributes":{},"id":"11869cce-e48d-4fe9-bfbf-834068f403af","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"cd4fa22e-fbb3-463f-9d69-5f90f2f95be0","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ab2581e2-e0e7-4b0c-98da-50599c7c2cb8","type":"BasicTickFormatter"},"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"4372809c-1657-437d-8415-4bd4c63b9c56","type":"BasicTicker"}},"id":"9042d054-0664-4782-9e52-cf205d635c94","type":"LinearAxis"},{"attributes":{"below":[{"id":"23fd35c1-ef35-41d2-95f0-604701cd82e5","type":"LinearAxis"}],"left":[{"id":"9042d054-0664-4782-9e52-cf205d635c94","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"23fd35c1-ef35-41d2-95f0-604701cd82e5","type":"LinearAxis"},{"id":"8eef8560-38f2-4975-a4cd-c7d1abf0c799","type":"Grid"},{"id":"9042d054-0664-4782-9e52-cf205d635c94","type":"LinearAxis"},{"id":"c0c8f540-047d-45dc-a550-e27616ea5914","type":"Grid"},{"id":"941e13f1-1ac5-4476-8206-6df13ad22435","type":"BoxAnnotation"},{"id":"3b2b6eaf-80d3-470f-8aba-c680131ae39f","type":"GlyphRenderer"}],"title":{"id":"a6be063c-97df-4e42-98a8-ac223f10b13a","type":"Title"},"tool_events":{"id":"a9b6e7ec-7b35-44af-aaac-746d3e63bb91","type":"ToolEvents"},"toolbar":{"id":"2955274f-8433-4af7-8753-4c11b04d548e","type":"Toolbar"},"x_range":{"id":"b33f3eaf-4967-46ca-88ba-b37ecffcef36","type":"DataRange1d"},"y_range":{"id":"cd4fa22e-fbb3-463f-9d69-5f90f2f95be0","type":"DataRange1d"}},"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"84ef5522-3271-4cfa-b827-8549349b4b7b","type":"Patch"},{"attributes":{"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"}},"id":"041bc678-1661-4ec0-bd2d-e514ed2ee4e2","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5f949614-cc2f-41ff-9bcb-486d0ee6e4a7","type":"PanTool"},{"id":"d15cc55d-d9e5-4596-84c3-ced424a76089","type":"WheelZoomTool"},{"id":"d6c06034-9e43-4770-aa54-8e8f0b0d9b3a","type":"BoxZoomTool"},{"id":"39e364ed-9190-4382-80ff-e26728871092","type":"SaveTool"},{"id":"6b16be3e-84a6-4be4-8edb-6251a882f613","type":"ResetTool"},{"id":"041bc678-1661-4ec0-bd2d-e514ed2ee4e2","type":"HelpTool"}]},"id":"2955274f-8433-4af7-8753-4c11b04d548e","type":"Toolbar"},{"attributes":{},"id":"a9b6e7ec-7b35-44af-aaac-746d3e63bb91","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"941e13f1-1ac5-4476-8206-6df13ad22435","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9d9ccbb8-99b2-4c21-8723-de38dc093225","type":"Patch"},{"attributes":{"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"}},"id":"d15cc55d-d9e5-4596-84c3-ced424a76089","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1acf4350-5550-4d6d-bd4b-734a2224ccb1","type":"ColumnDataSource"},"glyph":{"id":"84ef5522-3271-4cfa-b827-8549349b4b7b","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"9d9ccbb8-99b2-4c21-8723-de38dc093225","type":"Patch"},"selection_glyph":null},"id":"3b2b6eaf-80d3-470f-8aba-c680131ae39f","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"4372809c-1657-437d-8415-4bd4c63b9c56","type":"BasicTicker"}},"id":"c0c8f540-047d-45dc-a550-e27616ea5914","type":"Grid"},{"attributes":{},"id":"ab2581e2-e0e7-4b0c-98da-50599c7c2cb8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"}},"id":"6b16be3e-84a6-4be4-8edb-6251a882f613","type":"ResetTool"},{"attributes":{"overlay":{"id":"941e13f1-1ac5-4476-8206-6df13ad22435","type":"BoxAnnotation"},"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"}},"id":"d6c06034-9e43-4770-aa54-8e8f0b0d9b3a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"}},"id":"5f949614-cc2f-41ff-9bcb-486d0ee6e4a7","type":"PanTool"},{"attributes":{},"id":"ad580b72-6c65-44d1-a3c8-215242203797","type":"BasicTicker"},{"attributes":{},"id":"4372809c-1657-437d-8415-4bd4c63b9c56","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b33f3eaf-4967-46ca-88ba-b37ecffcef36","type":"DataRange1d"},{"attributes":{"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"}},"id":"39e364ed-9190-4382-80ff-e26728871092","type":"SaveTool"},{"attributes":{"plot":{"id":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad580b72-6c65-44d1-a3c8-215242203797","type":"BasicTicker"}},"id":"8eef8560-38f2-4975-a4cd-c7d1abf0c799","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"a6be063c-97df-4e42-98a8-ac223f10b13a","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"1acf4350-5550-4d6d-bd4b-734a2224ccb1","type":"ColumnDataSource"}],"root_ids":["a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6bb39c1b-1734-4676-b05c-c8bc530daba1","elementid":"2885b040-8f9a-4d2a-a546-80e7de81ea81","modelid":"a0efd1d4-1d0f-4d6c-bc24-e9dac3f74c7e"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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