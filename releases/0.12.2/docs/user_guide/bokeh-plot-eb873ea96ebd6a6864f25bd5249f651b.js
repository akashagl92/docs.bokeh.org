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
      };var element = document.getElementById("cdc171e8-ac3b-4dc5-be26-cca36359ba11");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cdc171e8-ac3b-4dc5-be26-cca36359ba11' but no matching script tag was found. ")
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
                  var docs_json = {"a1753908-3c60-410f-a0f6-33098dc09a80":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"b16b2bf3-9d5b-46ee-82cb-b2198ed6ef9d","type":"Circle"},{"attributes":{},"id":"b075f279-bfe9-4d4d-9c2f-3d833bfb92ab","type":"ToolEvents"},{"attributes":{},"id":"d1c905ce-1dc8-488e-9440-f2c23ee480d8","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a2fda6c8-da51-4c43-a547-3bf36d836021","type":"ColumnDataSource"},"glyph":{"id":"ab76ba09-10be-4fd9-acc4-2d3dcd97bae7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"b16b2bf3-9d5b-46ee-82cb-b2198ed6ef9d","type":"Circle"},"selection_glyph":null},"id":"662759ac-117e-4679-a3d4-4ded05a2d869","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1c905ce-1dc8-488e-9440-f2c23ee480d8","type":"BasicTicker"}},"id":"9806b0bd-522d-42a9-a3a4-f52de7aa3396","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54","subtype":"Figure","type":"Plot"},"ticker":{"id":"ecd2c171-273b-48d9-8c43-02312f19218e","type":"BasicTicker"}},"id":"5cb4e2e4-cff3-4d55-9ff1-139e9a88a69f","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.5,3.0,2.0],"y":[2.0,3.0,1.0,1.5]}},"id":"a2fda6c8-da51-4c43-a547-3bf36d836021","type":"ColumnDataSource"},{"attributes":{},"id":"6b82b41e-0c52-42ef-92b8-4c6534de703b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54","subtype":"Figure","type":"Plot"}},"id":"a7d26244-ebb2-4bcc-92dd-cb520c426887","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"c94cf301-601e-4f2c-946d-0123cf5681de","type":"Title"},{"attributes":{"plot":{"id":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54","subtype":"Figure","type":"Plot"}},"id":"3d634356-53df-4fab-8973-cfb7db5b69af","type":"PanTool"},{"attributes":{"callback":null},"id":"dbe8cfe7-cc21-48f3-b758-6944d2c8794a","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab76ba09-10be-4fd9-acc4-2d3dcd97bae7","type":"Circle"},{"attributes":{"callback":null},"id":"212eb089-b5c1-4022-b329-16f42e89dd72","type":"DataRange1d"},{"attributes":{},"id":"ecd2c171-273b-48d9-8c43-02312f19218e","type":"BasicTicker"},{"attributes":{},"id":"066365d2-dd7e-469e-b9ad-61ef9ec84515","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6b82b41e-0c52-42ef-92b8-4c6534de703b","type":"BasicTickFormatter"},"plot":{"id":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1c905ce-1dc8-488e-9440-f2c23ee480d8","type":"BasicTicker"}},"id":"03a1c856-7f23-465c-8f4f-b7d38827105c","type":"LinearAxis"},{"attributes":{"below":[{"id":"03a1c856-7f23-465c-8f4f-b7d38827105c","type":"LinearAxis"}],"left":[{"id":"060e3d7a-2f03-4bee-a50e-7c3809993628","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"03a1c856-7f23-465c-8f4f-b7d38827105c","type":"LinearAxis"},{"id":"9806b0bd-522d-42a9-a3a4-f52de7aa3396","type":"Grid"},{"id":"060e3d7a-2f03-4bee-a50e-7c3809993628","type":"LinearAxis"},{"id":"5cb4e2e4-cff3-4d55-9ff1-139e9a88a69f","type":"Grid"},{"id":"662759ac-117e-4679-a3d4-4ded05a2d869","type":"GlyphRenderer"}],"title":{"id":"c94cf301-601e-4f2c-946d-0123cf5681de","type":"Title"},"tool_events":{"id":"b075f279-bfe9-4d4d-9c2f-3d833bfb92ab","type":"ToolEvents"},"toolbar":{"id":"f138b9ac-20d4-4f63-87ab-cc869c1e8432","type":"Toolbar"},"x_range":{"id":"212eb089-b5c1-4022-b329-16f42e89dd72","type":"DataRange1d"},"y_range":{"id":"dbe8cfe7-cc21-48f3-b758-6944d2c8794a","type":"DataRange1d"}},"id":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3d634356-53df-4fab-8973-cfb7db5b69af","type":"PanTool"},{"id":"a7d26244-ebb2-4bcc-92dd-cb520c426887","type":"ResetTool"},{"id":"69deb537-9fc5-42fa-aebe-7e78f6ccba18","type":"SaveTool"}]},"id":"f138b9ac-20d4-4f63-87ab-cc869c1e8432","type":"Toolbar"},{"attributes":{"plot":{"id":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54","subtype":"Figure","type":"Plot"}},"id":"69deb537-9fc5-42fa-aebe-7e78f6ccba18","type":"SaveTool"},{"attributes":{"formatter":{"id":"066365d2-dd7e-469e-b9ad-61ef9ec84515","type":"BasicTickFormatter"},"plot":{"id":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54","subtype":"Figure","type":"Plot"},"ticker":{"id":"ecd2c171-273b-48d9-8c43-02312f19218e","type":"BasicTicker"}},"id":"060e3d7a-2f03-4bee-a50e-7c3809993628","type":"LinearAxis"}],"root_ids":["9660f0ed-2894-4cf0-9b7a-07ef99ce8a54"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"a1753908-3c60-410f-a0f6-33098dc09a80","elementid":"cdc171e8-ac3b-4dc5-be26-cca36359ba11","modelid":"9660f0ed-2894-4cf0-9b7a-07ef99ce8a54"}];
                  
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