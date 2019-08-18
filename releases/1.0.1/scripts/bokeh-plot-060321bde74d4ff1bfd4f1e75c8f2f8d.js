(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("48099652-065f-4a3d-a416-fe10ed5c0843");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48099652-065f-4a3d-a416-fe10ed5c0843' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"73f15a6d-d372-43ef-b0e7-f975e5fd491a":{"roots":{"references":[{"attributes":{},"id":"20327","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"20303","subtype":"Figure","type":"Plot"},"ticker":{"id":"20318","type":"BasicTicker"}},"id":"20321","type":"Grid"},{"attributes":{"callback":null,"factors":[["3","mazda"],["4","amc"],["4","audi"],["4","bmw"],["4","buick"],["4","capri"],["4","chevrolet"],["4","chrysler"],["4","datsun"],["4","dodge"],["4","fiat"],["4","ford"],["4","honda"],["4","mazda"],["4","mercedes"],["4","mercury"],["4","nissan"],["4","oldsmobile"],["4","opel"],["4","peugeot"],["4","plymouth"],["4","pontiac"],["4","renault"],["4","saab"],["4","subaru"],["4","toyota"],["4","triumph"],["4","volkswagen"],["4","volvo"],["5","audi"],["5","mercedes"],["6","amc"],["6","buick"],["6","chevrolet"],["6","chrysler"],["6","datsun"],["6","dodge"],["6","ford"],["6","mercedes"],["6","mercury"],["6","oldsmobile"],["6","peugeot"],["6","plymouth"],["6","pontiac"],["6","toyota"],["6","volvo"],["8","amc"],["8","buick"],["8","cadillac"],["8","chevrolet"],["8","chrysler"],["8","dodge"],["8","ford"],["8","hi"],["8","mercury"],["8","oldsmobile"],["8","plymouth"],["8","pontiac"]],"range_padding":0.05},"id":"20305","type":"FactorRange"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["MPG","@mpg_mean"],["Cyl, Mfr","@cyl_mfr"]]},"id":"20328","type":"HoverTool"},{"attributes":{"data_source":{"id":"20339","type":"ColumnDataSource"},"glyph":{"id":"20341","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20342","type":"VBar"},"selection_glyph":null,"view":{"id":"20344","type":"CDSView"}},"id":"20343","type":"GlyphRenderer"},{"attributes":{},"id":"20309","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Mean MPG by # Cylinders and Manufacturer"},"id":"20302","type":"Title"},{"attributes":{},"id":"20347","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20351","type":"Selection"},{"attributes":{},"id":"20349","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20331","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20322","type":"PanTool"},{"id":"20323","type":"WheelZoomTool"},{"id":"20324","type":"BoxZoomTool"},{"id":"20325","type":"SaveTool"},{"id":"20326","type":"ResetTool"},{"id":"20327","type":"HelpTool"},{"id":"20328","type":"HoverTool"}]},"id":"20329","type":"Toolbar"},{"attributes":{"below":[{"id":"20313","type":"CategoricalAxis"}],"left":[{"id":"20317","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":300,"plot_width":800,"renderers":[{"id":"20313","type":"CategoricalAxis"},{"id":"20316","type":"Grid"},{"id":"20317","type":"LinearAxis"},{"id":"20321","type":"Grid"},{"id":"20331","type":"BoxAnnotation"},{"id":"20343","type":"GlyphRenderer"}],"title":{"id":"20302","type":"Title"},"toolbar":{"id":"20329","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20305","type":"FactorRange"},"x_scale":{"id":"20309","type":"CategoricalScale"},"y_range":{"id":"20307","type":"DataRange1d"},"y_scale":{"id":"20311","type":"LinearScale"}},"id":"20303","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"20339","type":"ColumnDataSource"}},"id":"20344","type":"CDSView"},{"attributes":{},"id":"20322","type":"PanTool"},{"attributes":{"fill_color":{"field":"cyl_mfr","transform":{"id":"20301","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl_mfr"}},"id":"20341","type":"VBar"},{"attributes":{"end":1,"factors":["3","4","5","6","8"],"palette":["#2b83ba","#abdda4","#ffffbf","#fdae61","#d7191c"]},"id":"20301","type":"CategoricalColorMapper"},{"attributes":{},"id":"20311","type":"LinearScale"},{"attributes":{},"id":"20323","type":"WheelZoomTool"},{"attributes":{"axis_label":"Manufacturer grouped by # Cylinders","formatter":{"id":"20347","type":"CategoricalTickFormatter"},"major_label_orientation":1.2,"plot":{"id":"20303","subtype":"Figure","type":"Plot"},"ticker":{"id":"20314","type":"CategoricalTicker"}},"id":"20313","type":"CategoricalAxis"},{"attributes":{},"id":"20314","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl_mfr"}},"id":"20342","type":"VBar"},{"attributes":{"overlay":{"id":"20331","type":"BoxAnnotation"}},"id":"20324","type":"BoxZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"20303","subtype":"Figure","type":"Plot"},"ticker":{"id":"20314","type":"CategoricalTicker"}},"id":"20316","type":"Grid"},{"attributes":{"callback":null,"data":{"accel_25%":{"__ndarray__":"AAAAAACAKkBmZmZmZkYwQAAAAAAAAC1AZmZmZmYmKUDNzMzMzMwuQM3MzMzMzC1AAAAAAADgMEAAAAAAAAAtQDMzMzMz8y1AzczMzMzMLEDMzMzMzEwtQAEAAAAAgC9AAAAAAAAALkAAAAAAACAxQM3MzMzMzDVAZmZmZmamLUAAAAAAAAAtQJqZmZmZmTFAAAAAAADALEAAAAAAAIAyQP//////fy1AAAAAAAAAMEBmZmZmZqYwQAAAAAAAwCtAzMzMzMwsMEDNzMzMzMwtQDMzMzMzMy5AzMzMzMyMLEAAAAAAAAAtQGZmZmZm5jBAmpmZmZkZNEAzMzMzMzMuQM3MzMzMzC5AAAAAAAAALkCamZmZmZkwQDQzMzMzMylAzMzMzMxsMUCamZmZmZkuQDMzMzMzszBAZmZmZmYGMECamZmZmdkrQJqZmZmZmS9AAAAAAACAL0CamZmZmZkuQJqZmZmZGSpAMzMzMzMzLkAAAAAAAMAmQAAAAAAAgCZAmZmZmZnZKkAAAAAAAAAoQMzMzMzMzCdAAAAAAACAKEAAAAAAAMAoQAAAAAAAgDJAAAAAAAAAJ0AAAAAAAAAqQAAAAAAAACdAmpmZmZkZJUA=","dtype":"float64","shape":[58]},"accel_50%":{"__ndarray__":"AAAAAAAAK0DNzMzMzIwxQAAAAAAAAC5AzczMzMxMKUAAAAAAAAAwQM3MzMzMzC1AzczMzMxMMkAAAAAAAAAtQGZmZmZm5jBAAAAAAAAALUAAAAAAAAAvQDMzMzMzczBAmpmZmZkZMEAAAAAAAMAxQM3MzMzMzDVAzczMzMxML0AAAAAAAAAtQJqZmZmZmTFAAAAAAAAALkAAAAAAAIAzQGZmZmZmZi5AMzMzMzMzMEAAAAAAAAAyQDMzMzMzsy1AmpmZmZkZMUBmZmZmZmYwQDMzMzMzMy5AzczMzMzMLkAAAAAAAAAuQGZmZmZm5jFAmpmZmZkZNEAAAAAAAAAwQJqZmZmZmS9AZmZmZmZmMECamZmZmZkwQJqZmZmZmStAMzMzMzMzMkAAAAAAAEAwQDMzMzMzszBAMzMzMzNzMUBmZmZmZuYtQJqZmZmZmS9AAAAAAACAMECamZmZmZkvQAAAAAAAACtAmpmZmZmZMEAAAAAAAIAnQAAAAAAAACpAAAAAAACALUAAAAAAAAAqQDMzMzMzsyhAMzMzMzOzKkBmZmZmZuYqQAAAAAAAgDJAmpmZmZmZKUAAAAAAAAAvQDMzMzMzMypAAAAAAAAAJ0A=","dtype":"float64","shape":[58]},"accel_75%":{"__ndarray__":"AAAAAAAAK0A0MzMzM9MyQJqZmZmZmS9ANDMzMzNzKUAzMzMzMzMwQM3MzMzMzC1AAAAAAACAM0AAAAAAAAAtQDQzMzMzszJAmpmZmZnZL0AAAAAAAEAvQAAAAAAAgDFAAAAAAAAAMUCZmZmZmTkyQM3MzMzMzDVAmpmZmZl5MEAAAAAAAAAtQJqZmZmZmTFAMzMzMzOzL0BmZmZmZiY1QJmZmZmZOTBAAAAAAAAAMkDNzMzMzEwyQGZmZmZmJjBAmpmZmZnZMUCamZmZmRkxQDMzMzMzMy5AAAAAAADgNECamZmZmRkvQGZmZmZm5jJAmpmZmZkZNECamZmZmZkxQGZmZmZmpjBAAAAAAACAMUCamZmZmZkwQM3MzMzMTCxAMzMzMzOzMkA0MzMzM/MxQDMzMzMzszBAZmZmZmbmMkAzMzMzM/MvQJqZmZmZmS9AmpmZmZnZMEAzMzMzM/MwQAAAAAAAAC1AmpmZmZkZMkAzMzMzM7MpQAAAAAAAACxAMzMzMzMTMEAAAAAAAAAsQAAAAAAAQClAZmZmZmZmK0A0MzMzM7MsQAAAAAAAgDJAZmZmZmZmKkAAAAAAAAAzQAAAAAAAwCtAAAAAAACAJ0A=","dtype":"float64","shape":[58]},"accel_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"accel_max":{"__ndarray__":"AAAAAAAAK0CamZmZmRk0QAAAAAAAgDBAmpmZmZmZKUBmZmZmZmYwQM3MzMzMzC1AMzMzMzMzNkAAAAAAAAAtQGZmZmZmZjNAMzMzMzOzMUAAAAAAAIAzQDMzMzMzszRAAAAAAACAMkBmZmZmZmYzQM3MzMzMzDVAzczMzMxMMUAAAAAAAAAtQJqZmZmZmTFAZmZmZmbmMEDNzMzMzMw4QAAAAAAAgDRAAAAAAACAMkCamZmZmZkyQAAAAAAAgDFAAAAAAAAAMkAAAAAAAAA1QDMzMzMzMy5AmpmZmZmZOEBmZmZmZmYvQGZmZmZm5jNAmpmZmZkZNEAAAAAAAAAzQAAAAAAAADVAAAAAAACAMkCamZmZmZkwQAAAAAAAAC1AMzMzMzOzMkAAAAAAAAA1QDMzMzMzszBAAAAAAAAANUAAAAAAAAAxQJqZmZmZmS9AAAAAAAAAM0AzMzMzMzMzQAAAAAAAAC9AmpmZmZmZM0AAAAAAAAAvQM3MzMzMzC1AZmZmZmZmMUDNzMzMzMwuQAAAAAAAACpAZmZmZmZmLkAAAAAAAAAwQAAAAAAAgDJAzczMzMzMLUAzMzMzMzM2QAAAAAAAAC1AAAAAAAAAKEA=","dtype":"float64","shape":[58]},"accel_mean":{"__ndarray__":"AAAAAACAKkDNzMzMzIwxQFK4HoXrUS5AzczMzMxMKUB4d3d3d3cvQM3MzMzMzC1ANDMzMzNTMkAAAAAAAAAtQML1KFyP4jBAvLu7u7u7LUDNzMzMzEwvQJqZmZmZqTBAwA/8wA/8L0AzMzMzM4MxQM3MzMzMzDVAzczMzMxML0AAAAAAAAAtQJqZmZmZmTFAMzMzMzNzLkBf8RVf8RU0QBWuR+F6FC9A4noUrkdhMEDNzMzMzEwxQJqZmZmZWS5AzczMzMzsMECUD+N+XVIwQDMzMzMzMy5AqAR5SpBnMUCamZmZmRkuQGZmZmZm5jFAmpmZmZkZNEA0MzMzMzMwQEId1EEdVDBA0UUXXXTRL0CamZmZmZkwQHh3d3d3dypAzczMzMzsMUDv7u7u7s4wQDMzMzMzszBAmpmZmZl5MUBmZmZmZuYtQJqZmZmZmS9Ah7VvWPuGMEAzMzMzM3MwQLy7u7u7uytAmpmZmZmZMECamZmZmRkoQB7UQR3UQSlAAAAAAACALUDNzMzMzIwpQJqZmZmZWShAzMzMzMzMKUBSuB6F65EqQAAAAAAAgDJAXY/C9ShcKUCamZmZmRkwQKRwPQrXoyhAvuIrvuIrJkA=","dtype":"float64","shape":[58]},"accel_min":{"__ndarray__":"AAAAAAAAKUAAAAAAAAAuQAAAAAAAACxAAAAAAAAAKUCamZmZmZktQM3MzMzMzC1AAAAAAAAAL0AAAAAAAAAtQAAAAAAAAC1AMzMzMzMzJ0AAAAAAAAAsQDMzMzMzMytAmpmZmZmZK0BmZmZmZmYuQM3MzMzMzDVAAAAAAAAALEAAAAAAAAAtQJqZmZmZmTFAAAAAAAAALEAAAAAAAAAxQM3MzMzMzClAZmZmZmZmKkCamZmZmZkuQAAAAAAAACtAAAAAAAAAL0AAAAAAAAArQDMzMzMzMy5AZmZmZmZmKEAAAAAAAAAtQM3MzMzMzC9AmpmZmZkZNEAAAAAAAAAqQM3MzMzMzCpAmpmZmZmZJkCamZmZmZkwQM3MzMzMzCZAmpmZmZmZMEAAAAAAAAAtQDMzMzMzszBAAAAAAAAALEDNzMzMzMwpQJqZmZmZmS9AzczMzMzMLkAAAAAAAAAuQDMzMzMzMylAMzMzMzMzK0AAAAAAAAAhQAAAAAAAACRAMzMzMzMzKEAAAAAAAAAiQAAAAAAAACZAAAAAAAAAJEAAAAAAAAAkQAAAAAAAgDJAAAAAAAAAJkAAAAAAAAAmQAAAAAAAACBAAAAAAAAAI0A=","dtype":"float64","shape":[58]},"accel_std":{"__ndarray__":"AAAAAAAA4D/aBa/CltkMQJhwpa8jBvA/oRT/eiQnyz+s8nEBNKXqPwAAAAAAAPh/ZE+k085YAEAAAAAAAAD4fxI2soXgNfw//oDfulNv+j8yS6+hkwT7P3LUqK5Wo/s/LBFqidl/9j+zHuUrR1b1PwAAAAAAAPh/I16PFOmqAkAAAAAAAAD4fwAAAAAAAPh/062vj8V29D/psnKyNEsFQAtzj2BSAgFAr3RDq2ywAEBLKBJmHCD8P52IbbWHBP0/kpNDBEv+8j8n+uywYNL+PwAAAAAAAPh/iLbDYuyMDkCYZeZ6cH3kP8o7f2aeoAZAAAAAAAAA+H/u8iQBXIX6Pw0qa0PvxgJA/8KED5R4AkAAAAAAAAD4f1194pZpA/o/O9Xd5h0F8D8/TlRadd4AQAAAAAAAAPh/7+ZNqc1hB0DkNg8pbzEHQAAAAAAAAPh/tn2XMctw8T9kZmZmZmb+P3FLR1rzv/c/22zfzHb4EEAKUc4PcYQAQNKepMuXf/0/B/zORzj7DUCir7Qkh376PzMzMzMzM+s/bteC/TsB9z8GTyxx9PT5PwAAAAAAAPh//CUK2GSQ+D+e8zdT+FYQQPu1RsY47wJAIrZ6OpM27z8=","dtype":"float64","shape":[58]},"cyl_mfr":[["3","mazda"],["4","amc"],["4","audi"],["4","bmw"],["4","buick"],["4","capri"],["4","chevrolet"],["4","chrysler"],["4","datsun"],["4","dodge"],["4","fiat"],["4","ford"],["4","honda"],["4","mazda"],["4","mercedes"],["4","mercury"],["4","nissan"],["4","oldsmobile"],["4","opel"],["4","peugeot"],["4","plymouth"],["4","pontiac"],["4","renault"],["4","saab"],["4","subaru"],["4","toyota"],["4","triumph"],["4","volkswagen"],["4","volvo"],["5","audi"],["5","mercedes"],["6","amc"],["6","buick"],["6","chevrolet"],["6","chrysler"],["6","datsun"],["6","dodge"],["6","ford"],["6","mercedes"],["6","mercury"],["6","oldsmobile"],["6","peugeot"],["6","plymouth"],["6","pontiac"],["6","toyota"],["6","volvo"],["8","amc"],["8","buick"],["8","cadillac"],["8","chevrolet"],["8","chrysler"],["8","dodge"],["8","ford"],["8","hi"],["8","mercury"],["8","oldsmobile"],["8","plymouth"],["8","pontiac"]],"displ_25%":{"__ndarray__":"AAAAAACAUUAAAAAAABBgQAAAAAAAgFhAAAAAAABAXkAAAAAAAGBgQAAAAAAAgGFAAAAAAACAWEAAAAAAAIBjQAAAAAAAQFVAAAAAAACAWEAAAAAAAHBVQAAAAAAAYF5AAAAAAADAVkAAAAAAAIBVQAAAAAAAQGJAAAAAAAAAWkAAAAAAAABeQAAAAAAA4GJAAAAAAADQW0AAAAAAAMBcQAAAAAAAQFpAAAAAAACAYUAAAAAAAOBVQAAAAAAAMF1AAAAAAABAWEAAAAAAAEBXQAAAAAAAgF5AAAAAAACAVkAAAAAAAEBeQAAAAAAA4F5AAAAAAADgZkAAAAAAAABtQAAAAAAA4GxAAAAAAAAgbEAAAAAAACBsQAAAAAAAQGJAAAAAAAAgbEAAAAAAAABpQAAAAAAAAGVAAAAAAACYZ0AAAAAAAGhoQAAAAAAAYGRAAAAAAABwakAAAAAAAOBsQAAAAAAAgGNAAAAAAACwYkAAAAAAAABzQAAAAAAA4HVAAAAAAADgdUAAAAAAABBzQAAAAAAAYHhAAAAAAADgc0AAAAAAAOByQAAAAAAAAHNAAAAAAADgckAAAAAAAEBwQAAAAAAA4HNAAAAAAAAAeUA=","dtype":"float64","shape":[58]},"displ_50%":{"__ndarray__":"AAAAAACAUUAAAAAAAABhQAAAAAAAwFpAAAAAAABAXkAAAAAAAOBiQAAAAAAAgGFAAAAAAADgXEAAAAAAAIBjQAAAAAAAIFZAAAAAAABgWUAAAAAAAKBWQAAAAAAAYGBAAAAAAADAVkAAAAAAAMBWQAAAAAAAQGJAAAAAAACAW0AAAAAAAABeQAAAAAAA4GJAAAAAAAAAXUAAAAAAAABeQAAAAAAAQFpAAAAAAADgYkAAAAAAAABYQAAAAAAAQF5AAAAAAABAWEAAAAAAAABbQAAAAAAAgF5AAAAAAABAWEAAAAAAAEBeQAAAAAAAgF9AAAAAAADgZkAAAAAAAABtQAAAAAAA4GxAAAAAAABAb0AAAAAAACBsQAAAAAAAQGJAAAAAAAAgbEAAAAAAACBuQAAAAAAAAGVAAAAAAAAAaUAAAAAAADBrQAAAAAAAYGRAAAAAAAAgbEAAAAAAABBuQAAAAAAAgGNAAAAAAABAY0AAAAAAAABzQAAAAAAA4HVAAAAAAADgdUAAAAAAAOB1QAAAAAAAAHlAAAAAAADgc0AAAAAAAPB1QAAAAAAAAHNAAAAAAADwdUAAAAAAAOB1QAAAAAAA4HNAAAAAAAAAeUA=","dtype":"float64","shape":[58]},"displ_75%":{"__ndarray__":"AAAAAAAgUkAAAAAAAPBhQAAAAAAAgFxAAAAAAABAXkAAAAAAAOBiQAAAAAAAgGFAAAAAAACAYUAAAAAAAIBjQAAAAAAAsFtAAAAAAADgYEAAAAAAABBZQAAAAAAAgGFAAAAAAADAWkAAAAAAAJBYQAAAAAAAQGJAAAAAAAAAXUAAAAAAAABeQAAAAAAA4GJAAAAAAAAAXUAAAAAAAFBgQAAAAAAAeGBAAAAAAADgYkAAAAAAAKBYQAAAAAAAQF5AAAAAAADwWEAAAAAAACBdQAAAAAAAgF5AAAAAAABAWEAAAAAAANBeQAAAAAAAEGBAAAAAAADgZkAAAAAAACBwQAAAAAAA4GxAAAAAAABAb0AAAAAAACBsQAAAAAAAoGNAAAAAAAAgbEAAAAAAAEBvQAAAAAAAAGVAAAAAAACQakAAAAAAAPhtQAAAAAAAYGRAAAAAAAAgbEAAAAAAAEBvQAAAAAAAQGRAAAAAAADQY0AAAAAAAOBzQAAAAAAAKHlAAAAAAADgdUAAAAAAAOB1QAAAAAAAoHlAAAAAAADgc0AAAAAAAPB1QAAAAAAAAHNAAAAAAADQekAAAAAAAOB1QAAAAAAA6HRAAAAAAAAAeUA=","dtype":"float64","shape":[58]},"displ_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"displ_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAOBiQAAAAAAAwFxAAAAAAABAXkAAAAAAAOBiQAAAAAAAgGFAAAAAAADgYkAAAAAAAIBjQAAAAAAAwF1AAAAAAACAY0AAAAAAAABdQAAAAAAAgGFAAAAAAAAAXkAAAAAAAABeQAAAAAAAQGJAAAAAAACAXkAAAAAAAABeQAAAAAAA4GJAAAAAAAAAXUAAAAAAAKBhQAAAAAAAgGNAAAAAAADgYkAAAAAAAEBZQAAAAAAAQF5AAAAAAAAAW0AAAAAAAABiQAAAAAAAgF5AAAAAAABAXkAAAAAAAEBgQAAAAAAAYGBAAAAAAADgZkAAAAAAACBwQAAAAAAA4GxAAAAAAABAb0AAAAAAACBsQAAAAAAAAGVAAAAAAAAgbEAAAAAAAEBvQAAAAAAAAGVAAAAAAABAb0AAAAAAAGBwQAAAAAAAYGRAAAAAAAAgbEAAAAAAAEBvQAAAAAAAAGVAAAAAAABgZEAAAAAAAGB4QAAAAAAAcHxAAAAAAADgdUAAAAAAAGB8QAAAAAAAgHtAAAAAAADwd0AAAAAAANB6QAAAAAAAAHNAAAAAAADQekAAAAAAAOB1QAAAAAAAgHtAAAAAAABwfEA=","dtype":"float64","shape":[58]},"displ_mean":{"__ndarray__":"AAAAAAAgUkAAAAAAAABhQM3MzMzMjFpAAAAAAABAXkBVVVVVVTVhQAAAAAAAgGFAAAAAAAA4XkAAAAAAAIBjQAAAAAAA8FdAq6qqqqoyXUAAAAAAAAhXQAAAAAAAmF9A7MRO7MROWEAAAAAAANhXQAAAAAAAQGJAAAAAAACAW0AAAAAAAABeQAAAAAAA4GJAAAAAAADQW0Dbtm3btq1dQAAAAAAAoFxAAAAAAACgYUAAAAAAAABXQAAAAAAAMF1AAAAAAADwWEAhC1nIQlZaQAAAAAAAgF5Ao4suuujCV0AAAAAAANBeQAAAAAAAgF9AAAAAAADgZkB4eHh4eHhtQLdt27Zt+2tAL7rooovubEAAAAAAACBsQKuqqqqqKmNAAAAAAAAgbEAAAAAAAChsQAAAAAAAAGVAAAAAAAAoaUAAAAAAADBrQAAAAAAAYGRAdNFFF100a0AAAAAAABBuQAAAAAAAAGRAAAAAAABAY0AAAAAAABx0QAAAAAAAwHdAAAAAAADgdUAzMzMzMyt1QAAAAAAAAHlAVVVVVVWNdEAzMzMzMyN1QAAAAAAAAHNAmpmZmZmpdkBu27Zt23ZzQJqZmZmZCXVA27Zt27Z9eUA=","dtype":"float64","shape":[58]},"displ_min":{"__ndarray__":"AAAAAACAUUAAAAAAAEBeQAAAAAAAQFhAAAAAAABAXkAAAAAAAMBbQAAAAAAAgGFAAAAAAABAVUAAAAAAAIBjQAAAAAAAAFJAAAAAAACAVkAAAAAAAABRQAAAAAAAgFhAAAAAAABAVEAAAAAAAIBTQAAAAAAAQGJAAAAAAACAWEAAAAAAAABeQAAAAAAA4GJAAAAAAABAWEAAAAAAAMBTQAAAAAAAgFVAAAAAAAAAXEAAAAAAAMBTQAAAAAAAAFpAAAAAAABAWEAAAAAAAMBRQAAAAAAAgF5AAAAAAADAU0AAAAAAAEBeQAAAAAAAQF5AAAAAAADgZkAAAAAAAOBoQAAAAAAAoGZAAAAAAACgZUAAAAAAACBsQAAAAAAAQGJAAAAAAAAgbEAAAAAAAGBlQAAAAAAAAGVAAAAAAABgY0AAAAAAAKBlQAAAAAAAYGRAAAAAAADAaEAAAAAAAOBsQAAAAAAAgGNAAAAAAAAgYkAAAAAAAABzQAAAAAAA4HVAAAAAAADgdUAAAAAAAGBwQAAAAAAAgHZAAAAAAADgc0AAAAAAAOByQAAAAAAAAHNAAAAAAADgckAAAAAAAEBwQAAAAAAA4HNAAAAAAAAAeUA=","dtype":"float64","shape":[58]},"displ_std":{"__ndarray__":"AAAAAAAAFEAQSBeAlDY1QND+0iqIDSFAAAAAAAAAAADkP/QWERg3QAAAAAAAAPh/+dfIUHQBNkAAAAAAAAD4f/nXYs/oXy9AxlMEvhOzOECcmejwqUMuQEJ62kW6XTBA7/H89MrVJEDxy9ekg5ovQAAAAAAAAPh/2WzfzHb4MEAAAAAAAAD4fwAAAAAAAPh/AAAAAAAAI0Aa/8QMgwU1QMkv4IyP+DVA6BO8GJHlMEAyXl4LrBAnQAAAAAAAACFAAAAAAAAAFkADTF/qck41QAAAAAAAAPh/ueUP92yCIEAAAAAAAAASQMAKHwDGSBxAAAAAAAAA+H8NBy84wzoyQKw5M/zx5TJAhDQMOmhCQEAAAAAAAAD4f0ZGpv9FZylAAAAAAAAAAABMLSA/PfE8QAAAAAAAAPh/0EggZLxnQ0Ao74hGXHdPQAAAAAAAAPh/pawegC45KUCxPJuidvAlQKpMWOh6thtARiNPM7J0KUBdkHKATOpAQOzL2mkMnklAAAAAAAAAAADTDvECpxJIQKebB2Z2VEBAVjCdeBxNOUBJmiRDcqJDQAAAAAAAAPh/5Oc7bEXqT0DbMo/ysg1IQOdiu+j4fENAC1k4Yr3JNEA=","dtype":"float64","shape":[58]},"hp_25%":{"__ndarray__":"AAAAAADQV0AAAAAAAKBUQAAAAAAAwFRAAAAAAACwW0AAAAAAAIBUQAAAAAAAAFdAAAAAAABgUUAAAAAAAABXQAAAAAAAoFBAAAAAAADwU0AAAAAAACBRQAAAAAAAUFNAAAAAAAAATkAAAAAAAEBQQAAAAAAAwFBAAAAAAACAUkAAAAAAAABWQAAAAAAAQFVAAAAAAABQU0AAAAAAAOBSQAAAAAAAYFBAAAAAAABAVUAAAAAAAMBPQAAAAAAAkFpAAAAAAADAUEAAAAAAAOBQQAAAAAAAAFZAAAAAAABASkAAAAAAAEBZQAAAAAAAAFNAAAAAAABAU0AAAAAAAIBWQAAAAAAA4FpAAAAAAAAAWUAAAAAAAEBVQAAAAAAAIFtAAAAAAABgWEAAAAAAAABVQAAAAAAAAF5AAAAAAABwVEAAAAAAACBXQAAAAAAAoGBAAAAAAADAV0AAAAAAAPBZQAAAAAAAAFxAAAAAAAAQVkAAAAAAAMBiQAAAAAAAYGNAAAAAAABYYUAAAAAAADBhQAAAAAAAgGZAAAAAAAD4YUAAAAAAAHhhQAAAAAAAIGhAAAAAAABAYUAAAAAAAOBaQAAAAAAAwGJAAAAAAADgZUA=","dtype":"float64","shape":[58]},"hp_50%":{"__ndarray__":"AAAAAACgWEAAAAAAAEBVQAAAAAAAgFZAAAAAAADgW0AAAAAAAABVQAAAAAAAAFdAAAAAAACgU0AAAAAAAABXQAAAAAAAgFFAAAAAAABgVEAAAAAAAMBSQAAAAAAAYFVAAAAAAADAUEAAAAAAAABRQAAAAAAAwFBAAAAAAACAU0AAAAAAAABWQAAAAAAAQFVAAAAAAADgU0AAAAAAAMBVQAAAAAAAgFFAAAAAAAAAVkAAAAAAAEBRQAAAAAAAIFxAAAAAAADAUEAAAAAAAMBSQAAAAAAAAFZAAAAAAACAUUAAAAAAAMBaQAAAAAAAQFVAAAAAAABAU0AAAAAAAABZQAAAAAAAgFtAAAAAAABAWkAAAAAAAEBVQAAAAAAAAF5AAAAAAABAWkAAAAAAAABWQAAAAAAAAF5AAAAAAABAVUAAAAAAAABZQAAAAAAAoGBAAAAAAAAAWUAAAAAAAOBaQAAAAAAAAF1AAAAAAAAgWUAAAAAAAMBiQAAAAAAAoGRAAAAAAAAQY0AAAAAAACBiQAAAAAAAwGdAAAAAAADAYkAAAAAAACBiQAAAAAAAIGhAAAAAAABgYUAAAAAAAIBbQAAAAAAAwGJAAAAAAADgZUA=","dtype":"float64","shape":[58]},"hp_75%":{"__ndarray__":"AAAAAACgWUAAAAAAAOBVQAAAAAAAwFZAAAAAAAAQXEAAAAAAAMBVQAAAAAAAAFdAAAAAAAAgVkAAAAAAAABXQAAAAAAAIFdAAAAAAAAAVUAAAAAAAKBTQAAAAAAAAFZAAAAAAAAAUkAAAAAAAGBRQAAAAAAAwFBAAAAAAACAVEAAAAAAAABWQAAAAAAAQFVAAAAAAADQVEAAAAAAAOBVQAAAAAAAAFVAAAAAAACAVkAAAAAAAABTQAAAAAAAwFxAAAAAAABgUkAAAAAAAMBXQAAAAAAAAFZAAAAAAABQUkAAAAAAAABcQAAAAAAAgFdAAAAAAABAU0AAAAAAAABZQAAAAAAAgFtAAAAAAADgWkAAAAAAAEBVQAAAAAAAgF9AAAAAAACAW0AAAAAAAJBWQAAAAAAAAF5AAAAAAACgVkAAAAAAAOBaQAAAAAAAoGBAAAAAAACgWUAAAAAAANBbQAAAAAAAwF1AAAAAAAAwXEAAAAAAAIhjQAAAAAAAAGlAAAAAAADIZEAAAAAAADhjQAAAAAAAiGhAAAAAAABgY0AAAAAAAEhjQAAAAAAAIGhAAAAAAADAaEAAAAAAAEBlQAAAAAAAsGNAAAAAAABQaUA=","dtype":"float64","shape":[58]},"hp_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"hp_max":{"__ndarray__":"AAAAAACAW0AAAAAAAIBWQAAAAAAAwFdAAAAAAABAXEAAAAAAAIBWQAAAAAAAAFdAAAAAAACAVkAAAAAAAABXQAAAAAAAAFlAAAAAAABAWkAAAAAAAIBWQAAAAAAAAFdAAAAAAABAWEAAAAAAAMBSQAAAAAAAwFBAAAAAAACAVUAAAAAAAABWQAAAAAAAQFVAAAAAAACAVkAAAAAAAABWQAAAAAAAQFpAAAAAAACAVkAAAAAAAMBUQAAAAAAAwFxAAAAAAABAV0AAAAAAAEBYQAAAAAAAAFZAAAAAAACAU0AAAAAAAABcQAAAAAAAwFlAAAAAAABAU0AAAAAAAABeQAAAAAAAoGRAAAAAAADAXEAAAAAAAEBVQAAAAAAAgGBAAAAAAACAW0AAAAAAAABcQAAAAAAAAF5AAAAAAADAWkAAAAAAAMBcQAAAAAAAoGBAAAAAAABAWkAAAAAAAMBcQAAAAAAAgF5AAAAAAABAX0AAAAAAAMBnQAAAAAAAIGxAAAAAAACAZkAAAAAAAIBrQAAAAAAA4GpAAAAAAABAakAAAAAAAOBqQAAAAAAAIGhAAAAAAAAAakAAAAAAAIBmQAAAAAAA4GpAAAAAAADAbEA=","dtype":"float64","shape":[58]},"hp_mean":{"__ndarray__":"AAAAAADQWEAAAAAAAEBVQJqZmZmZ2VVAAAAAAADgW0CrqqqqqipVQAAAAAAAAFdAAAAAAABYU0AAAAAAAABXQM3MzMzMvFNAq6qqqqraVEAAAAAAAFhSQAAAAAAASFRAYid2Yif2UEAAAAAAALhQQAAAAAAAwFBAAAAAAACAU0AAAAAAAABWQAAAAAAAQFVAAAAAAABAVEBJkiRJkmRUQJqZmZmZOVNAzczMzMyMVUAAAAAAAIBRQAAAAAAAMFtAAAAAAABgUkDTm970pvdTQAAAAAAAAFZA6aKLLroIUEAAAAAAAIBaQAAAAAAAQFVAAAAAAABAU0Di4eHh4eFYQLdt27ZtG11ARhdddNEFWkAAAAAAAEBVQFVVVVVVFV1AAAAAAACgWUBVVVVVVRVWQAAAAAAAAF5AAAAAAADQVUAAAAAAAABZQAAAAAAAoGBARhdddNHFWEAAAAAAAOBaQFVVVVVV1VxAAAAAAAAgWUAAAAAAAExjQCVJkiRJUmZAAAAAAAAQY0AAAAAAAMhiQAAAAAAASGdAq6qqqqp6Y0BmZmZmZu5iQAAAAAAAIGhAMzMzMzNTZEAlSZIkSbJgQAAAAAAA8GNAAAAAAADAZ0A=","dtype":"float64","shape":[58]},"hp_min":{"__ndarray__":"AAAAAACAVkAAAAAAAABUQAAAAAAAgFNAAAAAAACAW0AAAAAAAABUQAAAAAAAAFdAAAAAAAAASkAAAAAAAABXQAAAAAAAgE5AAAAAAADAUkAAAAAAAIBIQAAAAAAAQFBAAAAAAACASkAAAAAAAABKQAAAAAAAwFBAAAAAAACAUUAAAAAAAABWQAAAAAAAQFVAAAAAAADAUkAAAAAAAIBRQAAAAAAAgE9AAAAAAACAU0AAAAAAAABNQAAAAAAAwFdAAAAAAADAUEAAAAAAAABKQAAAAAAAAFZAAAAAAAAAR0AAAAAAAIBYQAAAAAAAwFBAAAAAAABAU0AAAAAAAIBWQAAAAAAAQFpAAAAAAADAV0AAAAAAAEBVQAAAAAAAQFhAAAAAAACAVkAAAAAAAABSQAAAAAAAAF5AAAAAAAAAUkAAAAAAAEBVQAAAAAAAoGBAAAAAAADAV0AAAAAAAABZQAAAAAAAAFtAAAAAAAAAU0AAAAAAAABeQAAAAAAAwGJAAAAAAABAX0AAAAAAAIBbQAAAAAAAwGJAAAAAAADgYEAAAAAAACBgQAAAAAAAIGhAAAAAAABAYEAAAAAAAIBWQAAAAAAAwGJAAAAAAABAZUA=","dtype":"float64","shape":[58]},"hp_std":{"__ndarray__":"sTIWI2yaIEDACh8AxkgcQM2mvFe3NxtA2WzfzHb4AEA9iuQyBSIUQAAAAAAAAPh/LxLx8lwQKUAAAAAAAAD4f7sBlQW4kSxAKyfK5qleIEDIXtM5uhcpQCLax4ZuQSJAmb4/3QmgJkAEGqqKID0cQAAAAAAAAPh/zTt/Zp6gJkAAAAAAAAD4fwAAAAAAAPh/ZBImSkfsGUBYoQIYXR4gQPI+Tscsci1AOwacb3AUFEDkEORzVw8pQDylNHUA7iJAAAAAAAAAKkC/1T6E9ZotQAAAAAAAAPh/ReIBRJI+J0B4fOOq4ngcQEYjTzOydDlAAAAAAAAA+H8OCGcakIkhQDvrojUbjDVAAFRCNN9aF0AAAAAAAAD4f1p+aLQnyTFAyFjS2wYmI0BLVjPp6rMkQAAAAAAAAPh/C73Aw8ILLUAQSBeAlDY1QAAAAAAAAPh/Jna3ky16EUC1wWw+5NEZQIGe5vFWGBxAyWl5RvlSQUB34pp5zZo0QKdc+kkcYEBAZFcVIAhyQ0DmC02WHw05QOlioZ4Z4zpAMoQKyAEyNUDLHEDTpyA2QAAAAAAAAPh/0QbwVkCbQkA+baHJ9i9DQEApF6jZmzRAtcFsPuTROUA=","dtype":"float64","shape":[58]},"mpg_25%":{"__ndarray__":"AAAAAADAMkA0MzMzMxM5QAAAAAAAADdAAAAAAACgNkAAAAAAAIA7QAAAAAAAADlAAAAAAADgOEAAAAAAAAA6QGZmZmZmJjtAzMzMzMxsO0AAAAAAAAA6QDMzMzMz0zZAAAAAAAAAQEBnZmZmZoY/QAAAAAAAAD5AAAAAAABAOkAAAAAAAABCQM3MzMzMzDdAAAAAAADAOEAAAAAAAAA2QM3MzMzMTDpAAAAAAACAOEAAAAAAAIA6QGZmZmZmZjdAAAAAAAAAPUAAAAAAAIA4QAAAAAAAgEFAAAAAAABAOkAAAAAAAMAyQDQzMzMzUzhAZmZmZmZmOUAAAAAAAAAyQJqZmZmZGTNAAAAAAAAAMECamZmZmZkxQJqZmZmZGTdAmpmZmZn5MkAAAAAAAAAyQAAAAAAAgDBAmpmZmZmZMkCamZmZmZk9QDMzMzMzMzBAAAAAAAAAMkAAAAAAAOAyQAAAAAAAgDNAzczMzMxsNEAAAAAAAAAsQAAAAAAAACpAAAAAAAAgMkAAAAAAAAAqQAAAAAAAACpAAAAAAACAK0AAAAAAAAAqQAAAAAAAACJAAAAAAAAAKEAAAAAAAAAoQAAAAAAAACxAAAAAAAAALEA=","dtype":"float64","shape":[58]},"mpg_50%":{"__ndarray__":"AAAAAABANECamZmZmdk5QAAAAAAAADhAAAAAAADAN0BmZmZmZmY8QAAAAAAAADlAAAAAAAAAPEAAAAAAAAA6QAAAAAAAAEBAAAAAAACAPEAAAAAAAIA8QAAAAAAAwDlAAAAAAACAQECamZmZmblAQAAAAAAAAD5AAAAAAACAPUAAAAAAAABCQM3MzMzMzDdAAAAAAACAOUAAAAAAAAA5QM3MzMzMDEBAAAAAAAAAO0AAAAAAAAA7QAAAAAAAgDhAZmZmZmYmP0AAAAAAAAA9QAAAAAAAgEFAZmZmZmamPUAAAAAAAIAzQJqZmZmZWTxAZmZmZmZmOUCamZmZmRkyQJqZmZmZmTRAAAAAAACAMUCamZmZmZkxQDMzMzMzMzhAzczMzMyMM0AAAAAAAMAyQAAAAAAAgDBAzczMzMxMNEAzMzMzMzNAQDMzMzMzMzBAAAAAAAAAM0CamZmZmRkzQAAAAAAAADRAmpmZmZnZN0AAAAAAAAAuQAAAAAAAACpAAAAAAADAM0AAAAAAAAAuQAAAAAAAgCxAAAAAAAAALkAAAAAAAAAsQAAAAAAAACJAAAAAAAAALkAAAAAAAAAxQAAAAAAAACxAAAAAAAAALEA=","dtype":"float64","shape":[58]},"mpg_75%":{"__ndarray__":"zczMzMwMNkD//////586QAAAAAAAAD1AAAAAAADgOEAzMzMzMzM9QAAAAAAAADlAAAAAAAAgPkAAAAAAAAA6QAAAAAAAgEJAAAAAAAAwQEAAAAAAAEA+QAAAAAAAQDtAAAAAAAAAQkCamZmZmWlBQAAAAAAAAD5AAAAAAABgQEAAAAAAAABCQM3MzMzMzDdAAAAAAACAOkBmZmZmZqY7QDQzMzMzU0FAAAAAAAAAP0AAAAAAAIA/QAAAAAAAADlAZmZmZmZWQEDNzMzMzAxAQAAAAAAAgEFAAAAAAACgQUAAAAAAAIA0QAAAAAAAMEBAZmZmZmZmOUBmZmZmZmYzQDMzMzMzszVAAAAAAABANUCamZmZmZkxQDQzMzMzczxAZmZmZmYmNEBmZmZmZmY0QAAAAAAAgDBAmpmZmZnZNECamZmZmZlBQDMzMzMzMzBAAAAAAABANUBmZmZmZsYzQDMzMzMzszZAZmZmZmZGO0AAAAAAAEAvQAAAAAAAAC1AAAAAAABgNUAAAAAAAIAxQAAAAAAAQDBAAAAAAABgMEAAAAAAAEAvQAAAAAAAACJAAAAAAACAMEBmZmZmZuY1QAAAAAAAgC1AAAAAAAAAMEA=","dtype":"float64","shape":[58]},"mpg_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"mpg_max":{"__ndarray__":"MzMzMzOzN0BmZmZmZmY7QGZmZmZmJkFAAAAAAAAAOkAAAAAAAAA+QAAAAAAAADlAAAAAAAAAQUAAAAAAAAA6QGZmZmZmZkRAAAAAAAAAQkBmZmZmZqZCQM3MzMzMDEJAzczMzMxMRkDNzMzMzExHQAAAAAAAAD5AAAAAAAAAQkAAAAAAAABCQM3MzMzMzDdAAAAAAAAAPEAAAAAAAAA+QAAAAAAAgENAAAAAAADAQEAAAAAAAABCQAAAAAAAADlAZmZmZmbmQEDNzMzMzIxDQAAAAAAAgEFAZmZmZmYmRkAAAAAAAAA2QDMzMzMzM0JAZmZmZmZmOUAAAAAAAIA2QAAAAAAAADlAzczMzMzMPECamZmZmZkxQJqZmZmZWUBAmpmZmZmZNEAAAAAAAAA4QAAAAAAAgDBAAAAAAAAANUAAAAAAAABDQDMzMzMzMzBAAAAAAAAAN0AAAAAAAIA1QGZmZmZmZjlAMzMzMzOzPkAAAAAAAAAxQGZmZmZm5jBAAAAAAAAAN0AAAAAAAAA0QAAAAAAAgDJAZmZmZmZmM0CamZmZmRkyQAAAAAAAACJAMzMzMzMzNECamZmZmZk6QAAAAAAAADJAAAAAAAAAMEA=","dtype":"float64","shape":[58]},"mpg_mean":{"__ndarray__":"zczMzMyMNECamZmZmdk5QJDC9ShcDzpAAAAAAADAN0BVVVVVVVU8QAAAAAAAADlAmpmZmZlRO0AAAAAAAAA6QPUoXI/C1T9AERERERHRPUCamZmZmek8QDMzMzMzAzpAGHqhF3rhQEAAAAAAAGhBQAAAAAAAAD5AAAAAAACAPUAAAAAAAABCQM3MzMzMzDdAAAAAAADAOUAd1EEd1ME4QHsUrkfhOj9AzczMzMzMO0Crqqqqqqo9QGZmZmZm5jdAZmZmZmaGPkBoq8FzBAo9QAAAAAAAgEFAFl100UXXP0AAAAAAAMAzQJqZmZmZWTxAZmZmZmZmOUAhISEhIaEyQJmZmZmZmTRAnxLkKUEeM0CamZmZmZkxQM3MzMzMTDpANDMzMzOTM0AzMzMzM1MzQAAAAAAAgDBAZmZmZmYmM0AzMzMzMzNAQDMzMzMzMzBAF1100UWXM0DNzMzMzIwzQHh3d3d3dzVAmpmZmZnZN0AAAAAAAOAtQPmKr/iKrytAAAAAAADAM0AK16NwPUouQAAAAAAAAC5ARERERERELkDrUbgehassQAAAAAAAACJA4noUrkfhLUDGV3zFV3wxQAAAAAAAAC1A27Zt27ZtLUA=","dtype":"float64","shape":[58]},"mpg_min":{"__ndarray__":"AAAAAAAAMkDNzMzMzEw4QAAAAAAAADRAAAAAAACANUCamZmZmZk6QAAAAAAAADlAAAAAAAAANEAAAAAAAAA6QAAAAAAAADZAAAAAAAAAOUAAAAAAAAA4QAAAAAAAADNAAAAAAAAAOEAAAAAAAAA/QAAAAAAAAD5AAAAAAAAAN0AAAAAAAABCQM3MzMzMzDdAAAAAAAAAOEAAAAAAAAAzQDMzMzMzMzdAAAAAAAAAN0AAAAAAAAA6QJqZmZmZmTVAAAAAAAAAOkAAAAAAAAA0QAAAAAAAgEFAAAAAAAAANkAAAAAAAAAyQM3MzMzMTDRAZmZmZmZmOUAAAAAAAAAuQAAAAAAAADFAAAAAAAAALkCamZmZmZkxQAAAAAAAADZAmpmZmZmZMkAAAAAAAAAuQAAAAAAAgDBAAAAAAAAALkDNzMzMzMw6QDMzMzMzMzBAAAAAAAAAMEAAAAAAAIAyQAAAAAAAADNAAAAAAAAAMUAAAAAAAAAqQAAAAAAAAChAAAAAAACAMEAAAAAAAAAkQAAAAAAAACpAAAAAAAAAJkAAAAAAAAAkQAAAAAAAACJAAAAAAAAAJkAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[58]},"mpg_std":{"__ndarray__":"ca9eOxmEBEDuZ2+PR4kBQEoKBd4JhxZARiNPM7J0CUBFpF/rNjf7PwAAAAAAAPh/ubWdO9DbD0AAAAAAAAD4f2F5uw9NCBZAPs/+nwk+DkBlzHIpO2kQQDLD7CMzNhJAcb+tQ7cOE0Afg1pvTZ4UQAAAAAAAAPh/lmBHs4BiIkAAAAAAAAD4fwAAAAAAAPh/DGLpcEBT+z8dTFSH0NYPQHeSF+RxURZAtk+agoaVEUDKBtSSwAcWQCpmF/6kqvk/z+0aa+0tC0CORJ/7lD4VQAAAAAAAAPh/M1/gQ+RmHEAMYulwQFP7P5I6I5fSxCZAAAAAAAAA+H9x2LOz9Cn8PzIJf4/TsgVAkwuaddjbEEAAAAAAAAD4f9z6Q5RHmhZAr6hmWJaq7D8UE9sdnakCQAAAAAAAAPh/a1a8aTiHBkBR7X6Pqq0fQAAAAAAAAPh/g9Y0vSoMAUAptL5boFP1Py2Bit39igtAAVjDB+5fI0CVfHAmaUH0P1zHVUIgUvo/lmBHs4BiEkAPM5pJpl8GQNiUMqma6QRAGf4MvyO6A0D19nIPF17/PwAAAAAAAPh/8szklsJ3DUCH39aAveYYQC+gIkHPJfg/TDtjlJsO9D8=","dtype":"float64","shape":[58]},"weight_25%":{"__ndarray__":"AAAAAADNoUAAAAAAgIKlQAAAAAAAVqFAAAAAAAArokAAAAAAALaiQAAAAAAAGKRAAAAAAIDjoEAAAAAAADKkQAAAAAAAJ59AAAAAAICboEAAAAAAgAGgQAAAAAAAdaJAAAAAAAAgnEAAAAAAAPqeQAAAAAAAZKlAAAAAAIDJoEAAAAAAAOCgQAAAAAAATqZAAAAAAIDKoEAAAAAAAP2lQAAAAACApqBAAAAAAAAepEAAAAAAAFyfQAAAAACAOaRAAAAAAAD0n0AAAAAAADagQAAAAAAAiKNAAAAAAABEnkAAAAAAgMmmQAAAAAAAWKZAAAAAAACUq0AAAAAAAKqmQAAAAAAAE6lAAAAAAAAhqUAAAAAAABKrQAAAAAAAXaZAAAAAAIBfqkAAAAAAgEanQAAAAAAA2K1AAAAAAABZpkAAAAAAgLWlQAAAAAAApKpAAAAAAABPqEAAAAAAgJGpQAAAAAAAS6ZAAAAAAACSqEAAAAAAALCsQAAAAAAAca5AAAAAAABor0AAAAAAgNitQAAAAADAhLBAAAAAAABMrUAAAAAAAD6vQAAAAAAAfLJAAAAAAADmrkAAAAAAAKyrQAAAAACADK9AAAAAAIDrsEA=","dtype":"float64","shape":[58]},"weight_50%":{"__ndarray__":"AAAAAACOokAAAAAAACmmQAAAAAAA/KJAAAAAAADiokAAAAAAAJakQAAAAAAAGKRAAAAAAADJokAAAAAAADKkQAAAAAAAVKBAAAAAAACFoUAAAAAAAI6gQAAAAAAARqRAAAAAAAC0nkAAAAAAAFSfQAAAAAAAZKlAAAAAAAD5oEAAAAAAAOCgQAAAAAAATqZAAAAAAAAaoUAAAAAAAEanQAAAAAAAP6FAAAAAAABApEAAAAAAABqhQAAAAAAA06RAAAAAAAByoEAAAAAAALKhQAAAAAAAiKNAAAAAAAD6nkAAAAAAAPamQAAAAAAAlKZAAAAAAACUq0AAAAAAABqoQAAAAAAArqpAAAAAAAAQqkAAAAAAABKrQAAAAAAAvKZAAAAAAABZq0AAAAAAAMGnQAAAAAAA2K1AAAAAAACsp0AAAAAAAFOmQAAAAAAApKpAAAAAAACAqUAAAAAAAKGqQAAAAAAAqKZAAAAAAACcqEAAAAAAAPetQAAAAAAACLFAAAAAAAAssEAAAAAAAPSvQAAAAACAFbFAAAAAAADmrkAAAAAAgFiwQAAAAAAAfLJAAAAAAADHsEAAAAAAABqtQAAAAACAE7BAAAAAAABJsUA=","dtype":"float64","shape":[58]},"weight_75%":{"__ndarray__":"AAAAAAB+o0AAAAAAgM+mQAAAAAAALKRAAAAAAACZo0AAAAAAALmkQAAAAAAAGKRAAAAAAIBrpEAAAAAAADKkQAAAAACAH6JAAAAAAIDRokAAAAAAgJWhQAAAAACAl6VAAAAAAAA6oUAAAAAAAFShQAAAAAAAZKlAAAAAAIAooUAAAAAAAOCgQAAAAAAATqZAAAAAAACAoUAAAAAAABSpQAAAAACAd6JAAAAAAABepUAAAAAAACehQAAAAAAAHKVAAAAAAAA9oUAAAAAAAA6jQAAAAAAAiKNAAAAAAAAFoUAAAAAAgGinQAAAAAAA0KZAAAAAAACUq0AAAAAAAIKpQAAAAAAA1qpAAAAAAABDq0AAAAAAABKrQAAAAAAA0KZAAAAAAIBXrEAAAAAAAPSoQAAAAAAA2K1AAAAAAACxqEAAAAAAgPCmQAAAAAAApKpAAAAAAACMq0AAAAAAANWrQAAAAAAAxqZAAAAAAACmqEAAAAAAAIuuQAAAAACA+LFAAAAAAACksEAAAAAAAMawQAAAAABAlLFAAAAAAACOsEAAAAAAAEqxQAAAAAAAfLJAAAAAAAAZskAAAAAAAKKwQAAAAABAxbBAAAAAAADWsUA=","dtype":"float64","shape":[58]},"weight_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAAAAQAAAAAAAABRAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAPA/AAAAAAAAMEAAAAAAAADwPwAAAAAAADRAAAAAAAAAKEAAAAAAAAAgQAAAAAAAADBAAAAAAAAAKkAAAAAAAAAgQAAAAAAAAPA/AAAAAAAAAEAAAAAAAADwPwAAAAAAAPA/AAAAAAAAEEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAFEAAAAAAAAAIQAAAAAAAABBAAAAAAAAAEEAAAAAAAAA3QAAAAAAAAPA/AAAAAAAANkAAAAAAAAAQQAAAAAAAAABAAAAAAAAA8D8AAAAAAAAxQAAAAAAAABxAAAAAAAAAJkAAAAAAAADwPwAAAAAAAAhAAAAAAAAAEEAAAAAAAAAoQAAAAAAAAPA/AAAAAAAAEEAAAAAAAAAAQAAAAAAAAPA/AAAAAAAAJkAAAAAAAAAQQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAgQAAAAAAAABxAAAAAAAAAAEAAAAAAAAA0QAAAAAAAABBAAAAAAAAAKEAAAAAAAAA0QAAAAAAAAPA/AAAAAAAAFEAAAAAAAAAcQAAAAAAAACRAAAAAAAAAHEA=","dtype":"float64","shape":[58]},"weight_max":{"__ndarray__":"AAAAAABApUAAAAAAAHanQAAAAAAADKVAAAAAAABQpEAAAAAAANykQAAAAAAAGKRAAAAAAAAMp0AAAAAAADKkQAAAAAAAbqRAAAAAAADgpUAAAAAAAECjQAAAAAAAlKZAAAAAAAByo0AAAAAAAJakQAAAAAAAZKlAAAAAAABYoUAAAAAAAOCgQAAAAAAATqZAAAAAAAD4oUAAAAAAAIypQAAAAAAAcqVAAAAAAABopUAAAAAAADShQAAAAAAA1qVAAAAAAACuokAAAAAAAC6lQAAAAAAAiKNAAAAAAACeo0AAAAAAAJyoQAAAAAAADKdAAAAAAACUq0AAAAAAACStQAAAAAAAhq5AAAAAAAByrkAAAAAAABKrQAAAAAAA5KZAAAAAAACGrEAAAAAAAOyrQAAAAAAA2K1AAAAAAADQqkAAAAAAAI6nQAAAAAAApKpAAAAAAACSrUAAAAAAAHqsQAAAAAAA5KZAAAAAAACwqEAAAAAAAKGwQAAAAAAAV7NAAAAAAAAcsUAAAAAAAIWzQAAAAAAAf7JAAAAAAABbs0AAAAAAACqzQAAAAAAAfLJAAAAAAABYs0AAAAAAAJOxQAAAAAAALrJAAAAAAAAUtEA=","dtype":"float64","shape":[58]},"weight_mean":{"__ndarray__":"AAAAAAC9okAAAAAAACmmQDMzMzMz7aJAAAAAAADiokBVVVVVVW2jQAAAAAAAGKRAAAAAAADRokAAAAAAADKkQJqZmZmZw6BAVVVVVVXnoUAAAAAAQL6gQAAAAADAsKNA2Ymd2Imdn0AAAAAAwNKgQAAAAAAAZKlAAAAAAAD5oEAAAAAAAOCgQAAAAAAATqZAAAAAAIAwoUBJkiRJkrymQAAAAAAAiKFAMzMzMzOfpEAAAAAAADCgQAAAAACAgqRAAAAAAADFoECykIUsZHWhQAAAAAAAiKNAF1100UX3n0AAAAAAADynQAAAAAAAlKZAAAAAAACUq0AtLS0tLSuoQCVJkiRJSqpAF1100UXfqUAAAAAAABKrQAAAAAAAiqZAAAAAAABeq0CrqqqqqjGoQAAAAAAA2K1AAAAAAABep0AAAAAAAFOmQAAAAAAApKpARhdddNHRqUAAAAAAgMWqQAAAAAAAfqZAAAAAAACcqEAAAAAAwNetQNu2bdu2ZrBAAAAAAAAssEDNzMzMTJ+vQAAAAACAA7FAVVVVVdVrr0BmZmZmZjiwQAAAAAAAfLJAAAAAAAC5sEAlSZIkSViuQGZmZmZmA7BAt23btm2fsUA=","dtype":"float64","shape":[58]},"weight_min":{"__ndarray__":"AAAAAACYoEAAAAAAANykQAAAAAAAGKFAAAAAAAB0oUAAAAAAANagQAAAAAAAGKRAAAAAAADMn0AAAAAAADKkQAAAAAAANJlAAAAAAADsnUAAAAAAACydQAAAAAAAIJxAAAAAAACAm0AAAAAAAMieQAAAAAAAZKlAAAAAAACaoEAAAAAAAOCgQAAAAAAATqZAAAAAAACWoEAAAAAAADSgQAAAAAAATJ1AAAAAAAD4o0AAAAAAAIScQAAAAAAAjqJAAAAAAAAEn0AAAAAAAMSZQAAAAAAAiKNAAAAAAACEnEAAAAAAAGimQAAAAAAAHKZAAAAAAACUq0AAAAAAAJSkQAAAAAAAAqdAAAAAAABGpEAAAAAAABKrQAAAAAAA/qVAAAAAAABAqkAAAAAAADakQAAAAAAA2K1AAAAAAABQo0AAAAAAABilQAAAAAAApKpAAAAAAAAipkAAAAAAAFqpQAAAAAAA7qVAAAAAAACIqEAAAAAAANKqQAAAAAAAHKhAAAAAAAB4rkAAAAAAACqpQAAAAAAAyK5AAAAAAACOqkAAAAAAAMKoQAAAAAAAfLJAAAAAAADkq0AAAAAAAEqqQAAAAAAA2KpAAAAAAAB8sEA=","dtype":"float64","shape":[58]},"weight_std":{"__ndarray__":"udhs7B3ybkDJgFML7m5tQHQOAgl5pGtAv/NEO9EscECVL0zdOvxxQAAAAAAAAPh/wW0nP4+ucEAAAAAAAAD4f4r/RC1ucG5A26bUH9Bbb0DEkgnxpclmQAu85vvhr3NAil6Fh86ebEAB/frlgRdxQAAAAAAAAPh/Ym4SkDXLUEAAAAAAAAD4fwAAAAAAAPh/hHa7rCxqU0BUF7ym5216QOLeK9lru29Aonh3zZCSVkAlPmxrOcBqQMUzbKCqNmZA0OtrWjrzZUD+ciC3ut5yQAAAAAAAAPh/lJBdHgunZkBfQzaGKodeQBBIF4CUNlVAAAAAAAAA+H8Se53iBNhzQIXSN0vAlXNAusp/48JReEAAAAAAAAD4fzG8WqBzuE5A2ZIlQU44Y0BgQC8tFi9xQAAAAAAAAPh/cuB7YIy9eECVjh7ootdrQAAAAAAAAPh/FPo7/E0Pc0D4jA+ZxktoQK9EMr99CFBAwAofAMZILEBrziyk/kduQPlKCOFf64NAEEgXgJQ2dUCHC8hBP/B5QLvciQn9eXRA2zl5n4Y0e0B/cf0JJxl+QAAAAAAAAPh/adjqBGYEgUBsLGuRdgh9QAyvRS0PL3dAzax/B+OCc0A=","dtype":"float64","shape":[58]}},"selected":{"id":"20351","type":"Selection"},"selection_policy":{"id":"20352","type":"UnionRenderers"}},"id":"20339","type":"ColumnDataSource"},{"attributes":{},"id":"20325","type":"SaveTool"},{"attributes":{"callback":null,"start":0},"id":"20307","type":"DataRange1d"},{"attributes":{},"id":"20318","type":"BasicTicker"},{"attributes":{},"id":"20326","type":"ResetTool"},{"attributes":{"formatter":{"id":"20349","type":"BasicTickFormatter"},"plot":{"id":"20303","subtype":"Figure","type":"Plot"},"ticker":{"id":"20318","type":"BasicTicker"}},"id":"20317","type":"LinearAxis"},{"attributes":{},"id":"20352","type":"UnionRenderers"}],"root_ids":["20303"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"73f15a6d-d372-43ef-b0e7-f975e5fd491a","roots":{"20303":"48099652-065f-4a3d-a416-fe10ed5c0843"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();