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
      };var element = document.getElementById("e9e1ffff-ab77-4f7a-bd77-7e8ab6dffadf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e9e1ffff-ab77-4f7a-bd77-7e8ab6dffadf' but no matching script tag was found. ")
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
                var docs_json = {"cb623299-754b-4526-b377-97792bfc12a2":{"roots":{"references":[{"attributes":{"below":[{"id":"316921c3-937f-4129-95de-4d1f7eee57dc","type":"LinearAxis"}],"left":[{"id":"cde640d0-8abb-46cb-8cf5-27c90f42a9c3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"316921c3-937f-4129-95de-4d1f7eee57dc","type":"LinearAxis"},{"id":"0f1c8520-9efe-404d-81a3-e3655c86da84","type":"Grid"},{"id":"cde640d0-8abb-46cb-8cf5-27c90f42a9c3","type":"LinearAxis"},{"id":"611bbb36-65c8-4fd2-9ed5-30ec6e1cef46","type":"Grid"},{"id":"d10b3f07-8861-44df-bdb0-019877048fda","type":"BoxAnnotation"},{"id":"80acf053-dac5-48f7-94c8-b9cd27afc61a","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"dc9f55e8-3a18-4fea-b5c1-52c9d69ce593","type":"ToolEvents"},"toolbar":{"id":"70d12287-8133-4a3d-8e4a-f12545caa2c0","type":"Toolbar"},"x_range":{"id":"562c263c-4611-46af-8d8e-e2c4602bbb0e","type":"DataRange1d"},"x_scale":{"id":"19c0dcb8-0998-400d-b663-79d06de0606c","type":"LinearScale"},"y_range":{"id":"3e7b0a83-dc95-4111-8a97-b63d3b2ea088","type":"DataRange1d"},"y_scale":{"id":"3b21b3ed-fb92-4be5-a934-e7752bd27609","type":"LinearScale"}},"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca796381-6d73-480d-8fab-6008d7309da9","type":"Triangle"},{"attributes":{"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"}},"id":"a397287e-c51a-4ab8-a4af-e83761daa3e8","type":"SaveTool"},{"attributes":{},"id":"b11f794d-9dea-45b0-b459-ce1d0ee7ffee","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5945ac74-6c30-486a-9e76-1f3b78d71dc9","type":"BoxAnnotation"},{"attributes":{},"id":"5128ae03-98b3-4ff7-81a9-c550005a2433","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5b5c75a5-45fc-4120-96e3-1f7eb52c3938","type":"BasicTickFormatter"},"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"},"ticker":{"id":"5128ae03-98b3-4ff7-81a9-c550005a2433","type":"BasicTicker"}},"id":"316921c3-937f-4129-95de-4d1f7eee57dc","type":"LinearAxis"},{"attributes":{},"id":"82ed0f0f-7f21-487c-86c7-5668112d2622","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ef27c303-dcc4-4afe-8bb5-ede03265e661","type":"PanTool"},{"id":"91d8363e-cbc0-4e41-9d18-5cb2ea74978a","type":"WheelZoomTool"},{"id":"8380fdfc-aafb-46dd-bfa3-b0d1b77802f8","type":"BoxZoomTool"},{"id":"aba22df7-91e4-4fb5-a5f1-fdea38bb0c66","type":"SaveTool"},{"id":"1cf1a42f-1532-412c-8af9-491fd0b96631","type":"ResetTool"},{"id":"339ca303-33c4-4293-bf83-186e6eae56a1","type":"HelpTool"}]},"id":"70d12287-8133-4a3d-8e4a-f12545caa2c0","type":"Toolbar"},{"attributes":{"overlay":{"id":"eda957af-a66c-43fa-a34d-cc4bc5da78fe","type":"BoxAnnotation"},"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"}},"id":"2b4aeb53-5191-44e5-80a8-ac247ddc5948","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"8c576b9c-e909-4ebc-a3ae-d4a655f00d0b","type":"BasicTickFormatter"},"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"3608674a-23e2-4306-8032-71546d954766","type":"BasicTicker"}},"id":"fb029a69-2190-4325-84c9-712ec9c7a649","type":"LinearAxis"},{"attributes":{"formatter":{"id":"9f088349-e1d8-4a73-bc5c-d949963288f8","type":"BasicTickFormatter"},"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"},"ticker":{"id":"82ed0f0f-7f21-487c-86c7-5668112d2622","type":"BasicTicker"}},"id":"7fa4ef68-0159-43eb-b8e9-9a857f962f0c","type":"LinearAxis"},{"attributes":{"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"},"ticker":{"id":"5128ae03-98b3-4ff7-81a9-c550005a2433","type":"BasicTicker"}},"id":"0f1c8520-9efe-404d-81a3-e3655c86da84","type":"Grid"},{"attributes":{},"id":"7f1609e2-3a95-43c5-b944-d7ab06974103","type":"ToolEvents"},{"attributes":{"overlay":{"id":"d10b3f07-8861-44df-bdb0-019877048fda","type":"BoxAnnotation"},"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"}},"id":"8380fdfc-aafb-46dd-bfa3-b0d1b77802f8","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"}},"id":"2cbe92c5-6552-4b92-a78d-cdabeaff70e8","type":"WheelZoomTool"},{"attributes":{},"id":"5313697a-c46c-4848-b90f-d08bf205901a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"87f88a9c-6903-4e11-b3e5-d8a429f7c6ca","type":"ColumnDataSource"},"glyph":{"id":"d53a306b-82f0-447e-8031-c44827461a99","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"db9ff3cb-1c64-45cb-8a33-98ba1cf257ca","type":"Square"},"selection_glyph":null},"id":"21454f05-ff49-45a7-b291-9f058c2e32f9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"}},"id":"cf9db663-a881-4755-acd8-f627df724771","type":"PanTool"},{"attributes":{"callback":null},"id":"3e7b0a83-dc95-4111-8a97-b63d3b2ea088","type":"DataRange1d"},{"attributes":{"formatter":{"id":"5313697a-c46c-4848-b90f-d08bf205901a","type":"BasicTickFormatter"},"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0d4ca77-3b13-4997-8d1d-de9d09d1ebe2","type":"BasicTicker"}},"id":"cde640d0-8abb-46cb-8cf5-27c90f42a9c3","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ff58fe97-2b88-41f8-a15f-a5a8d4e41705","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d53a306b-82f0-447e-8031-c44827461a99","type":"Square"},{"attributes":{"below":[{"id":"7fa4ef68-0159-43eb-b8e9-9a857f962f0c","type":"LinearAxis"}],"left":[{"id":"c2f0efd8-96ef-453e-9208-b31ca56505f3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7fa4ef68-0159-43eb-b8e9-9a857f962f0c","type":"LinearAxis"},{"id":"b718da74-61f8-4cc4-beba-add4263fe32d","type":"Grid"},{"id":"c2f0efd8-96ef-453e-9208-b31ca56505f3","type":"LinearAxis"},{"id":"934fd61e-5be1-4ee1-a4be-a1175d9c9e26","type":"Grid"},{"id":"eda957af-a66c-43fa-a34d-cc4bc5da78fe","type":"BoxAnnotation"},{"id":"21454f05-ff49-45a7-b291-9f058c2e32f9","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"7f1609e2-3a95-43c5-b944-d7ab06974103","type":"ToolEvents"},"toolbar":{"id":"8246ef9e-6713-43db-909e-f76295cb0237","type":"Toolbar"},"x_range":{"id":"ddce033b-96ec-4205-947e-e8c818455370","type":"DataRange1d"},"x_scale":{"id":"d4ee67ac-b1ad-47ed-8f84-e1bbaa97a339","type":"LinearScale"},"y_range":{"id":"ff58fe97-2b88-41f8-a15f-a5a8d4e41705","type":"DataRange1d"},"y_scale":{"id":"a355777f-6377-4607-a294-3a42ab995993","type":"LinearScale"}},"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3d1c37d8-2aa3-4074-b721-9e8c66197cc5","type":"LinearScale"},{"attributes":{"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"3608674a-23e2-4306-8032-71546d954766","type":"BasicTicker"}},"id":"9d1cb9c4-6a8d-4bcb-afa6-44227540cb1e","type":"Grid"},{"attributes":{},"id":"2988f4bf-ea67-4842-843e-eb737e1f4d7e","type":"BasicTicker"},{"attributes":{"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"}},"id":"30fcbce9-e967-4c89-90c2-a5018e559384","type":"PanTool"},{"attributes":{},"id":"8c576b9c-e909-4ebc-a3ae-d4a655f00d0b","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cf9db663-a881-4755-acd8-f627df724771","type":"PanTool"},{"id":"2cbe92c5-6552-4b92-a78d-cdabeaff70e8","type":"WheelZoomTool"},{"id":"a2946e81-ca02-47c0-a5b7-e48411ef924a","type":"BoxZoomTool"},{"id":"a397287e-c51a-4ab8-a4af-e83761daa3e8","type":"SaveTool"},{"id":"fc9682f9-2095-42f2-9c07-8878b8d7e808","type":"ResetTool"},{"id":"617e9438-6f2f-43f1-b1bd-40d8b4947dad","type":"HelpTool"}]},"id":"68351a15-7693-4e39-a78f-709ce8b64043","type":"Toolbar"},{"attributes":{"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"}},"id":"1cf1a42f-1532-412c-8af9-491fd0b96631","type":"ResetTool"},{"attributes":{},"id":"5b5c75a5-45fc-4120-96e3-1f7eb52c3938","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b82666cd-465f-4c58-911f-a43eb98ebf25","type":"BasicTickFormatter"},"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b42973e-26f2-472d-844f-ca4e24c775ce","type":"BasicTicker"}},"id":"484c39c3-459c-49b4-8b57-3f936f79797b","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"db9ff3cb-1c64-45cb-8a33-98ba1cf257ca","type":"Square"},{"attributes":{},"id":"d836d1e9-2f12-43c0-ae28-d85c94976509","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eda957af-a66c-43fa-a34d-cc4bc5da78fe","type":"BoxAnnotation"},{"attributes":{},"id":"19c0dcb8-0998-400d-b663-79d06de0606c","type":"LinearScale"},{"attributes":{},"id":"52960984-5ad7-4df4-91ad-71be75f7e19b","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b42973e-26f2-472d-844f-ca4e24c775ce","type":"BasicTicker"}},"id":"21075490-266a-4b48-a711-b3fb3068544a","type":"Grid"},{"attributes":{"callback":null},"id":"d87440c7-523d-4043-8d9c-cf2db4a909fd","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"},"ticker":{"id":"2988f4bf-ea67-4842-843e-eb737e1f4d7e","type":"BasicTicker"}},"id":"934fd61e-5be1-4ee1-a4be-a1175d9c9e26","type":"Grid"},{"attributes":{"children":[{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"},{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"},{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"}]},"id":"fab87b41-d3ae-49e0-a094-304826191f8e","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d10b3f07-8861-44df-bdb0-019877048fda","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2a6603a-321f-4c91-af85-b6081224fed6","type":"Triangle"},{"attributes":{"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"}},"id":"91d8363e-cbc0-4e41-9d18-5cb2ea74978a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"}},"id":"c549ec08-3a17-42a2-b82b-2c3e2fe77413","type":"SaveTool"},{"attributes":{"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"}},"id":"7e1bb29a-fa38-4e72-8fd1-0afa6b4d6f76","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b25c9a9-b933-4a1f-b151-7ac131fe92da","type":"Circle"},{"attributes":{},"id":"6b42973e-26f2-472d-844f-ca4e24c775ce","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"05050671-1b59-4359-a83f-1072ed769a4d","type":"Circle"},{"attributes":{},"id":"dc9f55e8-3a18-4fea-b5c1-52c9d69ce593","type":"ToolEvents"},{"attributes":{"callback":null},"id":"fa55e016-07bf-408d-88e8-71bbc25cf2ed","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5d2626df-5e60-4706-ab23-fe651718f429","type":"ColumnDataSource"},"glyph":{"id":"05050671-1b59-4359-a83f-1072ed769a4d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3b25c9a9-b933-4a1f-b151-7ac131fe92da","type":"Circle"},"selection_glyph":null},"id":"80acf053-dac5-48f7-94c8-b9cd27afc61a","type":"GlyphRenderer"},{"attributes":{},"id":"3b21b3ed-fb92-4be5-a934-e7752bd27609","type":"LinearScale"},{"attributes":{},"id":"3608674a-23e2-4306-8032-71546d954766","type":"BasicTicker"},{"attributes":{},"id":"d4ee67ac-b1ad-47ed-8f84-e1bbaa97a339","type":"LinearScale"},{"attributes":{"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"}},"id":"aba22df7-91e4-4fb5-a5f1-fdea38bb0c66","type":"SaveTool"},{"attributes":{"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"}},"id":"339ca303-33c4-4293-bf83-186e6eae56a1","type":"HelpTool"},{"attributes":{"callback":null},"id":"ddce033b-96ec-4205-947e-e8c818455370","type":"DataRange1d"},{"attributes":{"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"},"ticker":{"id":"82ed0f0f-7f21-487c-86c7-5668112d2622","type":"BasicTicker"}},"id":"b718da74-61f8-4cc4-beba-add4263fe32d","type":"Grid"},{"attributes":{},"id":"9f088349-e1d8-4a73-bc5c-d949963288f8","type":"BasicTickFormatter"},{"attributes":{},"id":"b82666cd-465f-4c58-911f-a43eb98ebf25","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"5d2626df-5e60-4706-ab23-fe651718f429","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"3ca1e5dd-c248-4e5e-bc55-e3fa6ead3f1c","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"30fcbce9-e967-4c89-90c2-a5018e559384","type":"PanTool"},{"id":"758c2533-b1c7-4851-8d96-ded6ad323824","type":"WheelZoomTool"},{"id":"2b4aeb53-5191-44e5-80a8-ac247ddc5948","type":"BoxZoomTool"},{"id":"c549ec08-3a17-42a2-b82b-2c3e2fe77413","type":"SaveTool"},{"id":"f75c4f94-713e-47b7-81e8-fba8c639854b","type":"ResetTool"},{"id":"7e1bb29a-fa38-4e72-8fd1-0afa6b4d6f76","type":"HelpTool"}]},"id":"8246ef9e-6713-43db-909e-f76295cb0237","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0d4ca77-3b13-4997-8d1d-de9d09d1ebe2","type":"BasicTicker"}},"id":"611bbb36-65c8-4fd2-9ed5-30ec6e1cef46","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"87f88a9c-6903-4e11-b3e5-d8a429f7c6ca","type":"ColumnDataSource"},{"attributes":{},"id":"a355777f-6377-4607-a294-3a42ab995993","type":"LinearScale"},{"attributes":{"callback":null},"id":"562c263c-4611-46af-8d8e-e2c4602bbb0e","type":"DataRange1d"},{"attributes":{"below":[{"id":"fb029a69-2190-4325-84c9-712ec9c7a649","type":"LinearAxis"}],"left":[{"id":"484c39c3-459c-49b4-8b57-3f936f79797b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"fb029a69-2190-4325-84c9-712ec9c7a649","type":"LinearAxis"},{"id":"9d1cb9c4-6a8d-4bcb-afa6-44227540cb1e","type":"Grid"},{"id":"484c39c3-459c-49b4-8b57-3f936f79797b","type":"LinearAxis"},{"id":"21075490-266a-4b48-a711-b3fb3068544a","type":"Grid"},{"id":"5945ac74-6c30-486a-9e76-1f3b78d71dc9","type":"BoxAnnotation"},{"id":"ecf5e204-e04b-48eb-bc65-7725d2595377","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"52960984-5ad7-4df4-91ad-71be75f7e19b","type":"ToolEvents"},"toolbar":{"id":"68351a15-7693-4e39-a78f-709ce8b64043","type":"Toolbar"},"x_range":{"id":"d87440c7-523d-4043-8d9c-cf2db4a909fd","type":"DataRange1d"},"x_scale":{"id":"d836d1e9-2f12-43c0-ae28-d85c94976509","type":"LinearScale"},"y_range":{"id":"fa55e016-07bf-408d-88e8-71bbc25cf2ed","type":"DataRange1d"},"y_scale":{"id":"3d1c37d8-2aa3-4074-b721-9e8c66197cc5","type":"LinearScale"}},"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"}},"id":"fc9682f9-2095-42f2-9c07-8878b8d7e808","type":"ResetTool"},{"attributes":{},"id":"d0d4ca77-3b13-4997-8d1d-de9d09d1ebe2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3ca1e5dd-c248-4e5e-bc55-e3fa6ead3f1c","type":"ColumnDataSource"},"glyph":{"id":"b2a6603a-321f-4c91-af85-b6081224fed6","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ca796381-6d73-480d-8fab-6008d7309da9","type":"Triangle"},"selection_glyph":null},"id":"ecf5e204-e04b-48eb-bc65-7725d2595377","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"}},"id":"758c2533-b1c7-4851-8d96-ded6ad323824","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"}},"id":"f75c4f94-713e-47b7-81e8-fba8c639854b","type":"ResetTool"},{"attributes":{"plot":{"id":"be186d4a-82c5-4d0c-96b8-843a6ef66efe","subtype":"Figure","type":"Plot"}},"id":"ef27c303-dcc4-4afe-8bb5-ede03265e661","type":"PanTool"},{"attributes":{"formatter":{"id":"b11f794d-9dea-45b0-b459-ce1d0ee7ffee","type":"BasicTickFormatter"},"plot":{"id":"9a4c4d53-4c8f-433e-8012-0112ad128aef","subtype":"Figure","type":"Plot"},"ticker":{"id":"2988f4bf-ea67-4842-843e-eb737e1f4d7e","type":"BasicTicker"}},"id":"c2f0efd8-96ef-453e-9208-b31ca56505f3","type":"LinearAxis"},{"attributes":{"overlay":{"id":"5945ac74-6c30-486a-9e76-1f3b78d71dc9","type":"BoxAnnotation"},"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"}},"id":"a2946e81-ca02-47c0-a5b7-e48411ef924a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"4d2b7730-5400-48e8-b21d-dff50ae5a9a0","subtype":"Figure","type":"Plot"}},"id":"617e9438-6f2f-43f1-b1bd-40d8b4947dad","type":"HelpTool"}],"root_ids":["fab87b41-d3ae-49e0-a094-304826191f8e"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"cb623299-754b-4526-b377-97792bfc12a2","elementid":"e9e1ffff-ab77-4f7a-bd77-7e8ab6dffadf","modelid":"fab87b41-d3ae-49e0-a094-304826191f8e"}];
                
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
