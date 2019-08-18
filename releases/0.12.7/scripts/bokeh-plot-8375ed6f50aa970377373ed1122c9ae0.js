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
      };var element = document.getElementById("13b6798c-0af5-4720-9c6e-40c5167ccbb5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '13b6798c-0af5-4720-9c6e-40c5167ccbb5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"c5b5981c-21e6-4f2a-9a2f-e4fc8752480f":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"e62d5d10-ec26-4968-9f63-cb87603cb6a5","type":"ColumnDataSource"},{"attributes":{},"id":"aded89bb-a882-43dc-a9b6-3b6f67d00615","type":"ResetTool"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"190b8758-0cca-4670-85f8-49e67fd2be06","type":"PanTool"},{"id":"bc592048-bfb7-4cf2-81b5-cecdf19d6924","type":"WheelZoomTool"},{"id":"cd7d3783-f8e6-4ed6-8eac-ab3642df4d30","type":"BoxZoomTool"},{"id":"b97769c8-73d7-46bc-b0e4-6a5d81adae03","type":"SaveTool"},{"id":"18b096e9-78bd-4342-9f39-7318d468925b","type":"ResetTool"},{"id":"10048b93-13df-4859-8b75-b874428dedb3","type":"HelpTool"},{"id":"8293bc50-144c-40fc-a42f-f63643055a35","type":"PanTool"},{"id":"0bb0fcc9-c8cd-4d24-953c-156b6b25b8ab","type":"WheelZoomTool"},{"id":"4ca97500-6c11-42a4-8838-b02ded047562","type":"BoxZoomTool"},{"id":"dc70d6a1-1597-4fad-9a96-d15a549c7fef","type":"SaveTool"},{"id":"aded89bb-a882-43dc-a9b6-3b6f67d00615","type":"ResetTool"},{"id":"a0534ac0-05e6-4eca-b447-acf051c5e012","type":"HelpTool"},{"id":"d3e2b3ea-6542-45ec-87dd-8085040656fd","type":"PanTool"},{"id":"4ff747f8-4d8a-4197-ae4d-14a18d9442c9","type":"WheelZoomTool"},{"id":"771038c8-a3fb-4fde-8e51-c8ea9161a93e","type":"BoxZoomTool"},{"id":"ed7bb804-9477-4ab4-819f-5c129ad0e42f","type":"SaveTool"},{"id":"615839a6-c6a0-4298-9ef8-6332cd94c4cd","type":"ResetTool"},{"id":"6bdcb926-281d-4dcc-96d9-1b03fc6e8bcb","type":"HelpTool"}]},"id":"105a4eec-a3b8-45a8-93f5-3b2638dd8deb","type":"ToolbarBox"},{"attributes":{},"id":"4ff747f8-4d8a-4197-ae4d-14a18d9442c9","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"87a28d2c-84b0-44c7-88f1-5aafca209393","type":"LinearAxis"}],"left":[{"id":"d5464df1-443b-4a25-b3ba-2a80d084734a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"87a28d2c-84b0-44c7-88f1-5aafca209393","type":"LinearAxis"},{"id":"d123e8aa-9089-4ed9-b730-ebc410509f4b","type":"Grid"},{"id":"d5464df1-443b-4a25-b3ba-2a80d084734a","type":"LinearAxis"},{"id":"e93a775a-b8ed-4fcc-916b-81233c5b32f6","type":"Grid"},{"id":"bfe6fa97-f2d9-4184-a877-cbc7917108cb","type":"BoxAnnotation"},{"id":"f4252a92-23fe-4446-8c28-9bd08f41d83b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d90ceb87-36b4-4574-9c46-7abf82af935b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0e188a1c-0218-4119-9f60-af26cab99dca","type":"DataRange1d"},"x_scale":{"id":"a64f9c7a-700c-4892-8701-8a2fe32980fb","type":"LinearScale"},"y_range":{"id":"10291f63-fe12-4a32-9377-e7bf871a0742","type":"DataRange1d"},"y_scale":{"id":"6c3a508c-c197-4ded-8d70-f10d3ecee8b1","type":"LinearScale"}},"id":"b1b2a6b8-af3c-48fd-88da-0c387fdd1846","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7077c8bc-f260-41df-bd36-f044773b8c58","type":"BasicTickFormatter"},"plot":{"id":"0e1afca7-1b34-4739-bfdd-4955aa4388b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0b78a85-c5f9-49b1-8c58-733135a2dc14","type":"BasicTicker"}},"id":"efb0a180-0baa-458a-b77b-5190c804ad6e","type":"LinearAxis"},{"attributes":{},"id":"f81ecea3-8a34-403d-aa19-298c316e461e","type":"BasicTicker"},{"attributes":{},"id":"6bdcb926-281d-4dcc-96d9-1b03fc6e8bcb","type":"HelpTool"},{"attributes":{"callback":null},"id":"10291f63-fe12-4a32-9377-e7bf871a0742","type":"DataRange1d"},{"attributes":{},"id":"190b8758-0cca-4670-85f8-49e67fd2be06","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bfe6fa97-f2d9-4184-a877-cbc7917108cb","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"7e2a93ed-a226-4d15-ab0c-2b47640d9e01","type":"DataRange1d"},{"attributes":{"below":[{"id":"cbe832a7-0cdf-49bb-b3b5-62db24922e9b","type":"LinearAxis"}],"left":[{"id":"efb0a180-0baa-458a-b77b-5190c804ad6e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"cbe832a7-0cdf-49bb-b3b5-62db24922e9b","type":"LinearAxis"},{"id":"fa6a38d1-1501-47b4-8a25-b33db345e25b","type":"Grid"},{"id":"efb0a180-0baa-458a-b77b-5190c804ad6e","type":"LinearAxis"},{"id":"e91104a5-9ea2-452b-a034-2ce70400bf8c","type":"Grid"},{"id":"6346ed69-c291-4b19-9b57-93e7eb3cc996","type":"BoxAnnotation"},{"id":"712a3fa6-6fd6-436e-8f19-84afde321346","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"55b11da5-fd57-4404-9dc4-bab3032edda7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7e2a93ed-a226-4d15-ab0c-2b47640d9e01","type":"DataRange1d"},"x_scale":{"id":"f2425e45-e54d-4609-891f-cdf1b4941a60","type":"LinearScale"},"y_range":{"id":"b38f4dea-fe6a-479f-8de4-8194adf431f3","type":"DataRange1d"},"y_scale":{"id":"e75ef574-dbf1-4a9c-bc7e-f1d670664d61","type":"LinearScale"}},"id":"0e1afca7-1b34-4739-bfdd-4955aa4388b3","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"71171d4d-e574-4a0b-880d-eca5659c560c","type":"BasicTickFormatter"},"plot":{"id":"6d27fe6e-492b-4c49-86fa-3e8dcd431879","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e228789-c483-462f-be74-bc2e2e6a8983","type":"BasicTicker"}},"id":"14c4eed3-1fce-4203-895c-4012d2ab31ce","type":"LinearAxis"},{"attributes":{"callback":null},"id":"0e188a1c-0218-4119-9f60-af26cab99dca","type":"DataRange1d"},{"attributes":{},"id":"d0b78a85-c5f9-49b1-8c58-733135a2dc14","type":"BasicTicker"},{"attributes":{},"id":"10048b93-13df-4859-8b75-b874428dedb3","type":"HelpTool"},{"attributes":{},"id":"e75ef574-dbf1-4a9c-bc7e-f1d670664d61","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"6d27fe6e-492b-4c49-86fa-3e8dcd431879","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d280285-b91b-4997-8920-9865db05a754","type":"BasicTicker"}},"id":"3814fd5f-1381-4d6a-bfcb-d13a79fb5989","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"0e1afca7-1b34-4739-bfdd-4955aa4388b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0b78a85-c5f9-49b1-8c58-733135a2dc14","type":"BasicTicker"}},"id":"e91104a5-9ea2-452b-a034-2ce70400bf8c","type":"Grid"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab0bcdda-7afd-4b10-ac34-bf3cbba7d877","type":"Square"},{"attributes":{},"id":"40287d70-7c65-4e1d-af94-acfc6f1bb518","type":"LinearScale"},{"attributes":{"overlay":{"id":"19612461-72ba-4232-a56c-cf1ea8a1e780","type":"BoxAnnotation"}},"id":"cd7d3783-f8e6-4ed6-8eac-ab3642df4d30","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"75354fbe-5440-4578-a818-074c34a98f1f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9a78b17-73b1-456a-94f8-c8f6a8f279d2","type":"Circle"},{"attributes":{},"id":"71171d4d-e574-4a0b-880d-eca5659c560c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"388e659c-e044-4df8-9a57-93f721e36ac6","type":"BasicTickFormatter"},"plot":{"id":"b1b2a6b8-af3c-48fd-88da-0c387fdd1846","subtype":"Figure","type":"Plot"},"ticker":{"id":"f81ecea3-8a34-403d-aa19-298c316e461e","type":"BasicTicker"}},"id":"d5464df1-443b-4a25-b3ba-2a80d084734a","type":"LinearAxis"},{"attributes":{},"id":"d3e2b3ea-6542-45ec-87dd-8085040656fd","type":"PanTool"},{"attributes":{"data_source":{"id":"17b7e114-5f19-481e-86d1-305301e50d04","type":"ColumnDataSource"},"glyph":{"id":"339b3f18-75ee-48b6-a4ea-7d3706eae7d4","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d92d5878-ffd9-46fa-8dd0-db061dcad2cb","type":"Triangle"},"selection_glyph":null,"view":{"id":"11ff1bd3-df00-42e9-b68f-5c4e14604865","type":"CDSView"}},"id":"712a3fa6-6fd6-436e-8f19-84afde321346","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"190b8758-0cca-4670-85f8-49e67fd2be06","type":"PanTool"},{"id":"bc592048-bfb7-4cf2-81b5-cecdf19d6924","type":"WheelZoomTool"},{"id":"cd7d3783-f8e6-4ed6-8eac-ab3642df4d30","type":"BoxZoomTool"},{"id":"b97769c8-73d7-46bc-b0e4-6a5d81adae03","type":"SaveTool"},{"id":"18b096e9-78bd-4342-9f39-7318d468925b","type":"ResetTool"},{"id":"10048b93-13df-4859-8b75-b874428dedb3","type":"HelpTool"}]},"id":"6ec782d1-fa15-4c86-99a8-57347f5d22b2","type":"Toolbar"},{"attributes":{},"id":"9b5ccdb4-1dea-4db5-ac58-d5598f3674d3","type":"BasicTickFormatter"},{"attributes":{},"id":"7077c8bc-f260-41df-bd36-f044773b8c58","type":"BasicTickFormatter"},{"attributes":{},"id":"9d280285-b91b-4997-8920-9865db05a754","type":"BasicTicker"},{"attributes":{"overlay":{"id":"bfe6fa97-f2d9-4184-a877-cbc7917108cb","type":"BoxAnnotation"}},"id":"771038c8-a3fb-4fde-8e51-c8ea9161a93e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d92d5878-ffd9-46fa-8dd0-db061dcad2cb","type":"Triangle"},{"attributes":{},"id":"7e228789-c483-462f-be74-bc2e2e6a8983","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19612461-72ba-4232-a56c-cf1ea8a1e780","type":"BoxAnnotation"},{"attributes":{},"id":"18b096e9-78bd-4342-9f39-7318d468925b","type":"ResetTool"},{"attributes":{"formatter":{"id":"fe68a2bb-e23a-4510-97b7-651da1e72cae","type":"BasicTickFormatter"},"plot":{"id":"0e1afca7-1b34-4739-bfdd-4955aa4388b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8e6f50c-9319-45ec-a86e-387346f3a7eb","type":"BasicTicker"}},"id":"cbe832a7-0cdf-49bb-b3b5-62db24922e9b","type":"LinearAxis"},{"attributes":{"plot":{"id":"b1b2a6b8-af3c-48fd-88da-0c387fdd1846","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2b74da2-7efa-4c63-b7c0-6b65b6b171b9","type":"BasicTicker"}},"id":"d123e8aa-9089-4ed9-b730-ebc410509f4b","type":"Grid"},{"attributes":{},"id":"0bb0fcc9-c8cd-4d24-953c-156b6b25b8ab","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"749311e7-e5e5-4937-987e-45eec9e03c16","type":"DataRange1d"},{"attributes":{"plot":{"id":"6d27fe6e-492b-4c49-86fa-3e8dcd431879","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e228789-c483-462f-be74-bc2e2e6a8983","type":"BasicTicker"}},"id":"8ae79c9b-dc0b-4f54-88d3-96c4225c19e0","type":"Grid"},{"attributes":{},"id":"ed7bb804-9477-4ab4-819f-5c129ad0e42f","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"b1b2a6b8-af3c-48fd-88da-0c387fdd1846","subtype":"Figure","type":"Plot"},"ticker":{"id":"f81ecea3-8a34-403d-aa19-298c316e461e","type":"BasicTicker"}},"id":"e93a775a-b8ed-4fcc-916b-81233c5b32f6","type":"Grid"},{"attributes":{},"id":"f2425e45-e54d-4609-891f-cdf1b4941a60","type":"LinearScale"},{"attributes":{"overlay":{"id":"6346ed69-c291-4b19-9b57-93e7eb3cc996","type":"BoxAnnotation"}},"id":"4ca97500-6c11-42a4-8838-b02ded047562","type":"BoxZoomTool"},{"attributes":{},"id":"8293bc50-144c-40fc-a42f-f63643055a35","type":"PanTool"},{"attributes":{},"id":"a0534ac0-05e6-4eca-b447-acf051c5e012","type":"HelpTool"},{"attributes":{"formatter":{"id":"99936854-4f23-482a-954a-2613a19de2c3","type":"BasicTickFormatter"},"plot":{"id":"6d27fe6e-492b-4c49-86fa-3e8dcd431879","subtype":"Figure","type":"Plot"},"ticker":{"id":"9d280285-b91b-4997-8920-9865db05a754","type":"BasicTicker"}},"id":"bff471c4-1617-4c6a-9af5-18faed36567e","type":"LinearAxis"},{"attributes":{"children":[{"id":"c73f052a-d1a4-4c84-bc4f-10047243696d","type":"Spacer"},{"id":"b1b2a6b8-af3c-48fd-88da-0c387fdd1846","subtype":"Figure","type":"Plot"}]},"id":"fe53d11a-9073-43d5-8d58-74b1b4d5bcc0","type":"Row"},{"attributes":{"height":250,"width":250},"id":"c73f052a-d1a4-4c84-bc4f-10047243696d","type":"Spacer"},{"attributes":{},"id":"99936854-4f23-482a-954a-2613a19de2c3","type":"BasicTickFormatter"},{"attributes":{},"id":"6c3a508c-c197-4ded-8d70-f10d3ecee8b1","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"17b7e114-5f19-481e-86d1-305301e50d04","type":"ColumnDataSource"},{"attributes":{},"id":"388e659c-e044-4df8-9a57-93f721e36ac6","type":"BasicTickFormatter"},{"attributes":{},"id":"615839a6-c6a0-4298-9ef8-6332cd94c4cd","type":"ResetTool"},{"attributes":{"data_source":{"id":"e62d5d10-ec26-4968-9f63-cb87603cb6a5","type":"ColumnDataSource"},"glyph":{"id":"ab0bcdda-7afd-4b10-ac34-bf3cbba7d877","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"672e5745-0ddb-45e7-8d29-3a20cf746ba1","type":"Square"},"selection_glyph":null,"view":{"id":"604cb3dd-5f3e-4c25-91c4-d70f5ea5be4b","type":"CDSView"}},"id":"f4252a92-23fe-4446-8c28-9bd08f41d83b","type":"GlyphRenderer"},{"attributes":{"source":{"id":"75354fbe-5440-4578-a818-074c34a98f1f","type":"ColumnDataSource"}},"id":"7c67232c-e8be-47fb-92ff-2c3c36a0e3f4","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8293bc50-144c-40fc-a42f-f63643055a35","type":"PanTool"},{"id":"0bb0fcc9-c8cd-4d24-953c-156b6b25b8ab","type":"WheelZoomTool"},{"id":"4ca97500-6c11-42a4-8838-b02ded047562","type":"BoxZoomTool"},{"id":"dc70d6a1-1597-4fad-9a96-d15a549c7fef","type":"SaveTool"},{"id":"aded89bb-a882-43dc-a9b6-3b6f67d00615","type":"ResetTool"},{"id":"a0534ac0-05e6-4eca-b447-acf051c5e012","type":"HelpTool"}]},"id":"55b11da5-fd57-4404-9dc4-bab3032edda7","type":"Toolbar"},{"attributes":{},"id":"b2b74da2-7efa-4c63-b7c0-6b65b6b171b9","type":"BasicTicker"},{"attributes":{},"id":"e8e6f50c-9319-45ec-a86e-387346f3a7eb","type":"BasicTicker"},{"attributes":{"data_source":{"id":"75354fbe-5440-4578-a818-074c34a98f1f","type":"ColumnDataSource"},"glyph":{"id":"0f1353e3-e2f9-4293-83bb-c50f1f32c6d1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9a78b17-73b1-456a-94f8-c8f6a8f279d2","type":"Circle"},"selection_glyph":null,"view":{"id":"7c67232c-e8be-47fb-92ff-2c3c36a0e3f4","type":"CDSView"}},"id":"e41d119a-5c30-46d7-ae51-16173ef126ce","type":"GlyphRenderer"},{"attributes":{},"id":"bc592048-bfb7-4cf2-81b5-cecdf19d6924","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"73fead5a-052f-40ab-aa49-70b9906a4d42","type":"DataRange1d"},{"attributes":{},"id":"a64f9c7a-700c-4892-8701-8a2fe32980fb","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3e2b3ea-6542-45ec-87dd-8085040656fd","type":"PanTool"},{"id":"4ff747f8-4d8a-4197-ae4d-14a18d9442c9","type":"WheelZoomTool"},{"id":"771038c8-a3fb-4fde-8e51-c8ea9161a93e","type":"BoxZoomTool"},{"id":"ed7bb804-9477-4ab4-819f-5c129ad0e42f","type":"SaveTool"},{"id":"615839a6-c6a0-4298-9ef8-6332cd94c4cd","type":"ResetTool"},{"id":"6bdcb926-281d-4dcc-96d9-1b03fc6e8bcb","type":"HelpTool"}]},"id":"d90ceb87-36b4-4574-9c46-7abf82af935b","type":"Toolbar"},{"attributes":{"children":[{"id":"105a4eec-a3b8-45a8-93f5-3b2638dd8deb","type":"ToolbarBox"},{"id":"1beb195f-e96c-403f-8dd6-73c78eff770c","type":"Column"}]},"id":"96fa5159-4b52-4d7a-b1ab-e43f4f2cabef","type":"Column"},{"attributes":{"source":{"id":"17b7e114-5f19-481e-86d1-305301e50d04","type":"ColumnDataSource"}},"id":"11ff1bd3-df00-42e9-b68f-5c4e14604865","type":"CDSView"},{"attributes":{"plot":{"id":"0e1afca7-1b34-4739-bfdd-4955aa4388b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8e6f50c-9319-45ec-a86e-387346f3a7eb","type":"BasicTicker"}},"id":"fa6a38d1-1501-47b4-8a25-b33db345e25b","type":"Grid"},{"attributes":{},"id":"fe68a2bb-e23a-4510-97b7-651da1e72cae","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"14c4eed3-1fce-4203-895c-4012d2ab31ce","type":"LinearAxis"}],"left":[{"id":"bff471c4-1617-4c6a-9af5-18faed36567e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"14c4eed3-1fce-4203-895c-4012d2ab31ce","type":"LinearAxis"},{"id":"8ae79c9b-dc0b-4f54-88d3-96c4225c19e0","type":"Grid"},{"id":"bff471c4-1617-4c6a-9af5-18faed36567e","type":"LinearAxis"},{"id":"3814fd5f-1381-4d6a-bfcb-d13a79fb5989","type":"Grid"},{"id":"19612461-72ba-4232-a56c-cf1ea8a1e780","type":"BoxAnnotation"},{"id":"e41d119a-5c30-46d7-ae51-16173ef126ce","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6ec782d1-fa15-4c86-99a8-57347f5d22b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"73fead5a-052f-40ab-aa49-70b9906a4d42","type":"DataRange1d"},"x_scale":{"id":"aec12cf7-a684-4cae-b4aa-093a3238bee7","type":"LinearScale"},"y_range":{"id":"749311e7-e5e5-4937-987e-45eec9e03c16","type":"DataRange1d"},"y_scale":{"id":"40287d70-7c65-4e1d-af94-acfc6f1bb518","type":"LinearScale"}},"id":"6d27fe6e-492b-4c49-86fa-3e8dcd431879","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"9b5ccdb4-1dea-4db5-ac58-d5598f3674d3","type":"BasicTickFormatter"},"plot":{"id":"b1b2a6b8-af3c-48fd-88da-0c387fdd1846","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2b74da2-7efa-4c63-b7c0-6b65b6b171b9","type":"BasicTicker"}},"id":"87a28d2c-84b0-44c7-88f1-5aafca209393","type":"LinearAxis"},{"attributes":{"children":[{"id":"4d8f914a-0be3-40db-9d77-0e7cb891d2c1","type":"Row"},{"id":"fe53d11a-9073-43d5-8d58-74b1b4d5bcc0","type":"Row"}]},"id":"1beb195f-e96c-403f-8dd6-73c78eff770c","type":"Column"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f1353e3-e2f9-4293-83bb-c50f1f32c6d1","type":"Circle"},{"attributes":{},"id":"b97769c8-73d7-46bc-b0e4-6a5d81adae03","type":"SaveTool"},{"attributes":{"children":[{"id":"6d27fe6e-492b-4c49-86fa-3e8dcd431879","subtype":"Figure","type":"Plot"},{"id":"0e1afca7-1b34-4739-bfdd-4955aa4388b3","subtype":"Figure","type":"Plot"}]},"id":"4d8f914a-0be3-40db-9d77-0e7cb891d2c1","type":"Row"},{"attributes":{},"id":"aec12cf7-a684-4cae-b4aa-093a3238bee7","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6346ed69-c291-4b19-9b57-93e7eb3cc996","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"339b3f18-75ee-48b6-a4ea-7d3706eae7d4","type":"Triangle"},{"attributes":{},"id":"dc70d6a1-1597-4fad-9a96-d15a549c7fef","type":"SaveTool"},{"attributes":{"callback":null},"id":"b38f4dea-fe6a-479f-8de4-8194adf431f3","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"672e5745-0ddb-45e7-8d29-3a20cf746ba1","type":"Square"},{"attributes":{"source":{"id":"e62d5d10-ec26-4968-9f63-cb87603cb6a5","type":"ColumnDataSource"}},"id":"604cb3dd-5f3e-4c25-91c4-d70f5ea5be4b","type":"CDSView"}],"root_ids":["96fa5159-4b52-4d7a-b1ab-e43f4f2cabef"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"c5b5981c-21e6-4f2a-9a2f-e4fc8752480f","elementid":"13b6798c-0af5-4720-9c6e-40c5167ccbb5","modelid":"96fa5159-4b52-4d7a-b1ab-e43f4f2cabef"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
