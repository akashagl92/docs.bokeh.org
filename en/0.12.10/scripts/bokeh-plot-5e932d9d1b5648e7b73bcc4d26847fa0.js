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
      };var element = document.getElementById("cc5d35c5-4fe0-4319-86ac-f1ff337035fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc5d35c5-4fe0-4319-86ac-f1ff337035fe' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"e402a1d8-238a-429e-8b8d-959d98f4288a":{"roots":{"references":[{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"f9f2165c-c19a-409a-b33a-d28a95b377d2","type":"MonthsTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"e06cd18c-645b-4cb1-9706-5a56125a4564","type":"VBar"},{"attributes":{"source":{"id":"6fc4bc26-797a-48e0-b152-4c598c0e23d9","type":"ColumnDataSource"}},"id":"cee15ec4-6cb0-4c88-9460-480c685af626","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"afbe4e92-385c-44d2-a873-2f4a4a873af4","type":"BoxAnnotation"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"1c026431-5feb-4230-987a-7405a0b13f86","type":"AdaptiveTicker"},{"attributes":{"days":[1,8,15,22]},"id":"54aa2e43-b5fe-497f-85bb-6e5d50c9938d","type":"DaysTicker"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"ea4cce29-4e49-4302-b6f6-96eb6121b31d","type":"Title"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"943790f9-1c5e-4c6a-8f02-b9037948a6f6","type":"VBar"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"f3ac8e82-64bc-4ed7-85a6-62e92e894fe9","type":"AdaptiveTicker"},{"attributes":{"data_source":{"id":"7492cddc-f919-482b-add0-9e5eacd288ff","type":"ColumnDataSource"},"glyph":{"id":"219794d5-81d7-470c-afb0-50c74d4b2a24","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55a27f1a-3541-49b2-94e4-937f98e258de","type":"Segment"},"selection_glyph":null,"view":{"id":"17af3e43-3a21-4e28-8167-6e5d3a181b61","type":"CDSView"}},"id":"8d2c7669-8138-4802-b2e1-39361d811ffb","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"968cb4d5-1236-4123-adc3-03856762d789","type":"ColumnDataSource"},"glyph":{"id":"f5c25adc-cbad-4e5d-af15-f7725f4ae541","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"832f1315-54b5-402e-ab77-905f1dc45e9e","type":"VBar"},"selection_glyph":null,"view":{"id":"8af8c8ae-a2b3-44c7-a311-67d565714f80","type":"CDSView"}},"id":"703f2282-f020-41e7-a87a-c2823732161e","type":"GlyphRenderer"},{"attributes":{},"id":"5c63138e-5902-419d-8fb0-ba527d421acb","type":"PanTool"},{"attributes":{},"id":"90463ce2-1875-4b3e-8425-68c0b2485e7b","type":"WheelZoomTool"},{"attributes":{"source":{"id":"7492cddc-f919-482b-add0-9e5eacd288ff","type":"ColumnDataSource"}},"id":"17af3e43-3a21-4e28-8167-6e5d3a181b61","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"55a27f1a-3541-49b2-94e4-937f98e258de","type":"Segment"},{"attributes":{"callback":null},"id":"188362f4-3cf7-4f1c-855a-db205c736690","type":"DataRange1d"},{"attributes":{"data_source":{"id":"6fc4bc26-797a-48e0-b152-4c598c0e23d9","type":"ColumnDataSource"},"glyph":{"id":"e06cd18c-645b-4cb1-9706-5a56125a4564","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"943790f9-1c5e-4c6a-8f02-b9037948a6f6","type":"VBar"},"selection_glyph":null,"view":{"id":"cee15ec4-6cb0-4c88-9460-480c685af626","type":"CDSView"}},"id":"06a6e702-4e3e-43de-8d7e-59294ebda162","type":"GlyphRenderer"},{"attributes":{"months":[0,4,8]},"id":"45de3579-6fc2-4e1e-afbf-87f01f3a2a53","type":"MonthsTicker"},{"attributes":{},"id":"f4ad2921-27c1-44fe-9d9b-e50cb5aea86d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}}},"id":"968cb4d5-1236-4123-adc3-03856762d789","type":"ColumnDataSource"},{"attributes":{},"id":"24cfadf0-3c3e-4d96-8be8-ec80f5cf753f","type":"ResetTool"},{"attributes":{"overlay":{"id":"afbe4e92-385c-44d2-a873-2f4a4a873af4","type":"BoxAnnotation"}},"id":"38eb4965-cd06-4ca1-a021-8eaf6fc54ab0","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"93a817d9-f6c0-4f04-a51e-df0e5685ceae","type":"DatetimeAxis"}],"left":[{"id":"5f43a3ff-0e39-48cd-ab67-8707eb823722","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"93a817d9-f6c0-4f04-a51e-df0e5685ceae","type":"DatetimeAxis"},{"id":"c6dc11af-6ee4-4b74-9139-d6520371adb9","type":"Grid"},{"id":"5f43a3ff-0e39-48cd-ab67-8707eb823722","type":"LinearAxis"},{"id":"e9eb1a70-f9e7-4a6a-8f1d-e5acc92d4f3d","type":"Grid"},{"id":"afbe4e92-385c-44d2-a873-2f4a4a873af4","type":"BoxAnnotation"},{"id":"8d2c7669-8138-4802-b2e1-39361d811ffb","type":"GlyphRenderer"},{"id":"703f2282-f020-41e7-a87a-c2823732161e","type":"GlyphRenderer"},{"id":"06a6e702-4e3e-43de-8d7e-59294ebda162","type":"GlyphRenderer"}],"title":{"id":"ea4cce29-4e49-4302-b6f6-96eb6121b31d","type":"Title"},"toolbar":{"id":"9ed97299-f00f-46a3-b32c-216a7fc59c72","type":"Toolbar"},"x_range":{"id":"188362f4-3cf7-4f1c-855a-db205c736690","type":"DataRange1d"},"x_scale":{"id":"1c074c5f-50ff-4fec-9372-787033c2a3ac","type":"LinearScale"},"y_range":{"id":"461aa654-95ad-4bba-8d02-13d65ead9cda","type":"DataRange1d"},"y_scale":{"id":"c9436aef-54e1-4124-85a1-db613761e32e","type":"LinearScale"}},"id":"fb8109cb-253c-4579-b9c9-8031111c2fc3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f36cc256-9b66-4109-9668-544fb841cf13","type":"SaveTool"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"219794d5-81d7-470c-afb0-50c74d4b2a24","type":"Segment"},{"attributes":{"formatter":{"id":"661228e3-d782-434b-b223-3f704e4e2f70","type":"BasicTickFormatter"},"plot":{"id":"fb8109cb-253c-4579-b9c9-8031111c2fc3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4ad2921-27c1-44fe-9d9b-e50cb5aea86d","type":"BasicTicker"}},"id":"5f43a3ff-0e39-48cd-ab67-8707eb823722","type":"LinearAxis"},{"attributes":{"source":{"id":"968cb4d5-1236-4123-adc3-03856762d789","type":"ColumnDataSource"}},"id":"8af8c8ae-a2b3-44c7-a311-67d565714f80","type":"CDSView"},{"attributes":{},"id":"661228e3-d782-434b-b223-3f704e4e2f70","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5c63138e-5902-419d-8fb0-ba527d421acb","type":"PanTool"},{"id":"90463ce2-1875-4b3e-8425-68c0b2485e7b","type":"WheelZoomTool"},{"id":"38eb4965-cd06-4ca1-a021-8eaf6fc54ab0","type":"BoxZoomTool"},{"id":"24cfadf0-3c3e-4d96-8be8-ec80f5cf753f","type":"ResetTool"},{"id":"f36cc256-9b66-4109-9668-544fb841cf13","type":"SaveTool"}]},"id":"9ed97299-f00f-46a3-b32c-216a7fc59c72","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}}},"id":"7492cddc-f919-482b-add0-9e5eacd288ff","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"f5c25adc-cbad-4e5d-af15-f7725f4ae541","type":"VBar"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"cc472f84-2ffe-456c-8754-7eb836c305e0","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"b086b747-0d28-4f26-a00b-3c321446fef9","type":"MonthsTicker"},{"attributes":{},"id":"1c074c5f-50ff-4fec-9372-787033c2a3ac","type":"LinearScale"},{"attributes":{"callback":null},"id":"461aa654-95ad-4bba-8d02-13d65ead9cda","type":"DataRange1d"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"fb8109cb-253c-4579-b9c9-8031111c2fc3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4ad2921-27c1-44fe-9d9b-e50cb5aea86d","type":"BasicTicker"}},"id":"e9eb1a70-f9e7-4a6a-8f1d-e5acc92d4f3d","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"832f1315-54b5-402e-ab77-905f1dc45e9e","type":"VBar"},{"attributes":{"days":[1,15]},"id":"b25e145a-b551-4325-8021-181126e9d4c0","type":"DaysTicker"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"fb8109cb-253c-4579-b9c9-8031111c2fc3","subtype":"Figure","type":"Plot"},"ticker":{"id":"5fe6f09d-094a-4701-b2e1-736ec6740551","type":"DatetimeTicker"}},"id":"c6dc11af-6ee4-4b74-9139-d6520371adb9","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}}},"id":"6fc4bc26-797a-48e0-b152-4c598c0e23d9","type":"ColumnDataSource"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"a01b449b-230a-4970-9715-a1a23ba47769","type":"DaysTicker"},{"attributes":{},"id":"c9436aef-54e1-4124-85a1-db613761e32e","type":"LinearScale"},{"attributes":{},"id":"92cd103b-7ddc-4f04-a4eb-0465fbaa7493","type":"DatetimeTickFormatter"},{"attributes":{"formatter":{"id":"92cd103b-7ddc-4f04-a4eb-0465fbaa7493","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"fb8109cb-253c-4579-b9c9-8031111c2fc3","subtype":"Figure","type":"Plot"},"ticker":{"id":"5fe6f09d-094a-4701-b2e1-736ec6740551","type":"DatetimeTicker"}},"id":"93a817d9-f6c0-4f04-a51e-df0e5685ceae","type":"DatetimeAxis"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"77e3c752-8cb5-4331-99fa-96246bf6c83d","type":"AdaptiveTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"6b16b69b-3702-4698-b26d-b523476f840c","type":"DaysTicker"},{"attributes":{},"id":"8afaf6ae-f7a2-4671-8eb8-82959e121d0e","type":"YearsTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"1c026431-5feb-4230-987a-7405a0b13f86","type":"AdaptiveTicker"},{"id":"77e3c752-8cb5-4331-99fa-96246bf6c83d","type":"AdaptiveTicker"},{"id":"f3ac8e82-64bc-4ed7-85a6-62e92e894fe9","type":"AdaptiveTicker"},{"id":"6b16b69b-3702-4698-b26d-b523476f840c","type":"DaysTicker"},{"id":"a01b449b-230a-4970-9715-a1a23ba47769","type":"DaysTicker"},{"id":"54aa2e43-b5fe-497f-85bb-6e5d50c9938d","type":"DaysTicker"},{"id":"b25e145a-b551-4325-8021-181126e9d4c0","type":"DaysTicker"},{"id":"f9f2165c-c19a-409a-b33a-d28a95b377d2","type":"MonthsTicker"},{"id":"cc472f84-2ffe-456c-8754-7eb836c305e0","type":"MonthsTicker"},{"id":"45de3579-6fc2-4e1e-afbf-87f01f3a2a53","type":"MonthsTicker"},{"id":"b086b747-0d28-4f26-a00b-3c321446fef9","type":"MonthsTicker"},{"id":"8afaf6ae-f7a2-4671-8eb8-82959e121d0e","type":"YearsTicker"}]},"id":"5fe6f09d-094a-4701-b2e1-736ec6740551","type":"DatetimeTicker"}],"root_ids":["fb8109cb-253c-4579-b9c9-8031111c2fc3"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e402a1d8-238a-429e-8b8d-959d98f4288a","elementid":"cc5d35c5-4fe0-4319-86ac-f1ff337035fe","modelid":"fb8109cb-253c-4579-b9c9-8031111c2fc3"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
