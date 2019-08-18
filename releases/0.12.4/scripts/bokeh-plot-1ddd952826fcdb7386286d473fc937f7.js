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
      };var element = document.getElementById("1d1a8c03-3bd1-48b9-b760-86a55e70a69a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d1a8c03-3bd1-48b9-b760-86a55e70a69a' but no matching script tag was found. ")
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
                var docs_json = {"000cf60c-531f-41e9-9ce1-d69b3ab042a1":{"roots":{"references":[{"attributes":{"months":[0,6]},"id":"152ae735-ed39-4a32-b60d-6916a22bfdbb","type":"MonthsTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8b42a9e3-b58e-4122-95e6-5055bb311dab","type":"PanTool"},{"id":"9fd5acb1-72fc-40b1-829b-5dc836ef3ab8","type":"WheelZoomTool"},{"id":"56701b09-1595-460b-9bbe-efcca0eddc67","type":"BoxZoomTool"},{"id":"8e2c326b-6cd6-4181-abcb-4c4e19628a17","type":"ResetTool"},{"id":"c3a92c40-00b3-4134-92d4-39613cca34ed","type":"SaveTool"}]},"id":"f93b6f9b-3eee-41fd-97f1-34d963b8a58a","type":"Toolbar"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"0165048e-72dc-4fc0-a9e4-7c4e962c0aeb","type":"VBar"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"56dedb30-b0a4-40f6-8f26-2bf8ba934f85","type":"AdaptiveTicker"},{"attributes":{},"id":"c1480db5-92d8-4d25-9e69-926da1964252","type":"ToolEvents"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"},"ticker":{"id":"a31aa578-5b7a-42ff-8a67-02e24971b0f8","type":"DatetimeTicker"}},"id":"146078ec-23d0-46d7-b7e6-58b6b1c85619","type":"Grid"},{"attributes":{"data_source":{"id":"ea98a59f-094e-4571-9e3d-29dfbeb26113","type":"ColumnDataSource"},"glyph":{"id":"b7121f7a-1a9c-4709-b3da-c6a1bf41adae","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"dec4dbb3-cb0a-4805-83dc-7111febf5fad","type":"Segment"},"selection_glyph":null},"id":"0c265d33-0192-4aac-92bc-4d5598ba7848","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"2ab0f4f6-93e9-4343-8b13-977f78d51d55","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"},"ticker":{"id":"a31aa578-5b7a-42ff-8a67-02e24971b0f8","type":"DatetimeTicker"}},"id":"3bba1508-5c5f-495c-b1be-911a78d2c22c","type":"DatetimeAxis"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b7121f7a-1a9c-4709-b3da-c6a1bf41adae","type":"Segment"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"a2c94f56-b520-437d-b4b0-d7467f756be9","type":"MonthsTicker"},{"attributes":{},"id":"6606d36a-df8d-4dfc-a102-e92601655933","type":"BasicTicker"},{"attributes":{"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"}},"id":"8e2c326b-6cd6-4181-abcb-4c4e19628a17","type":"ResetTool"},{"attributes":{"days":[1,8,15,22]},"id":"6159179e-01a3-4750-b9f8-ba4041dce2f3","type":"DaysTicker"},{"attributes":{"overlay":{"id":"46692ad8-e7e9-4d41-ac68-9aa8e2799816","type":"BoxAnnotation"},"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"}},"id":"56701b09-1595-460b-9bbe-efcca0eddc67","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","bottom","top"],"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}}},"id":"90b67540-4634-468f-8bfe-cf864dba2439","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"}},"id":"9fd5acb1-72fc-40b1-829b-5dc836ef3ab8","type":"WheelZoomTool"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"748b8cab-61e5-400a-aa8d-89af244d1308","type":"DaysTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"46692ad8-e7e9-4d41-ac68-9aa8e2799816","type":"BoxAnnotation"},{"attributes":{"months":[0,4,8]},"id":"acbb9838-6470-4578-a020-1bf26d0dc5db","type":"MonthsTicker"},{"attributes":{"callback":null,"column_names":["x","bottom","top"],"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}}},"id":"a778b304-7322-4764-9e64-b698afd65d6a","type":"ColumnDataSource"},{"attributes":{"num_minor_ticks":5},"id":"a31aa578-5b7a-42ff-8a67-02e24971b0f8","type":"DatetimeTicker"},{"attributes":{},"id":"7bebd26e-14e9-4e2d-acc7-827f8c22a4c6","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"2f6c8c38-dcbd-4736-b899-d790dada7f31","type":"Title"},{"attributes":{"below":[{"id":"3bba1508-5c5f-495c-b1be-911a78d2c22c","type":"DatetimeAxis"}],"left":[{"id":"4e6df7c6-9df6-4768-bc87-8ac098f81544","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"3bba1508-5c5f-495c-b1be-911a78d2c22c","type":"DatetimeAxis"},{"id":"146078ec-23d0-46d7-b7e6-58b6b1c85619","type":"Grid"},{"id":"4e6df7c6-9df6-4768-bc87-8ac098f81544","type":"LinearAxis"},{"id":"244986d0-37f4-467e-8e11-99fe1e1f08f3","type":"Grid"},{"id":"46692ad8-e7e9-4d41-ac68-9aa8e2799816","type":"BoxAnnotation"},{"id":"0c265d33-0192-4aac-92bc-4d5598ba7848","type":"GlyphRenderer"},{"id":"24fb21b0-d1fe-4cfd-9997-208c8f1d2128","type":"GlyphRenderer"},{"id":"b9222680-c5ac-473e-a835-db1e2cab124e","type":"GlyphRenderer"}],"title":{"id":"2f6c8c38-dcbd-4736-b899-d790dada7f31","type":"Title"},"tool_events":{"id":"c1480db5-92d8-4d25-9e69-926da1964252","type":"ToolEvents"},"toolbar":{"id":"f93b6f9b-3eee-41fd-97f1-34d963b8a58a","type":"Toolbar"},"x_range":{"id":"a884014e-7fa0-4772-8c4f-0ad7207eda8b","type":"DataRange1d"},"y_range":{"id":"d20fc3e4-834b-461b-a076-5757082ab12c","type":"DataRange1d"}},"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"},"ticker":{"id":"6606d36a-df8d-4dfc-a102-e92601655933","type":"BasicTicker"}},"id":"244986d0-37f4-467e-8e11-99fe1e1f08f3","type":"Grid"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"58d73553-0116-4968-9d48-1beee3c4f9dd","type":"AdaptiveTicker"},{"attributes":{},"id":"2ab0f4f6-93e9-4343-8b13-977f78d51d55","type":"DatetimeTickFormatter"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"be2ef07b-3d71-4c9b-bf06-243cb9d4d9cf","type":"MonthsTicker"},{"attributes":{"formatter":{"id":"7bebd26e-14e9-4e2d-acc7-827f8c22a4c6","type":"BasicTickFormatter"},"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"},"ticker":{"id":"6606d36a-df8d-4dfc-a102-e92601655933","type":"BasicTicker"}},"id":"4e6df7c6-9df6-4768-bc87-8ac098f81544","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"6b80ce9d-494f-48fb-97a2-8fe67443da60","type":"VBar"},{"attributes":{"data_source":{"id":"90b67540-4634-468f-8bfe-cf864dba2439","type":"ColumnDataSource"},"glyph":{"id":"c4f3260e-0933-48ef-8d0b-989f858ccb03","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"0165048e-72dc-4fc0-a9e4-7c4e962c0aeb","type":"VBar"},"selection_glyph":null},"id":"b9222680-c5ac-473e-a835-db1e2cab124e","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"c4f3260e-0933-48ef-8d0b-989f858ccb03","type":"VBar"},{"attributes":{"callback":null},"id":"a884014e-7fa0-4772-8c4f-0ad7207eda8b","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"afd2b15c-239f-48c4-b91f-529b5d4d3b64","type":"VBar"},{"attributes":{"data_source":{"id":"a778b304-7322-4764-9e64-b698afd65d6a","type":"ColumnDataSource"},"glyph":{"id":"afd2b15c-239f-48c4-b91f-529b5d4d3b64","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"6b80ce9d-494f-48fb-97a2-8fe67443da60","type":"VBar"},"selection_glyph":null},"id":"24fb21b0-d1fe-4cfd-9997-208c8f1d2128","type":"GlyphRenderer"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"f7737d9b-9456-490a-a7fc-5dc3c9d908d2","type":"DaysTicker"},{"attributes":{"callback":null},"id":"d20fc3e4-834b-461b-a076-5757082ab12c","type":"DataRange1d"},{"attributes":{"days":[1,15]},"id":"98d707fa-6729-4e09-b9b4-e61d0be66840","type":"DaysTicker"},{"attributes":{"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"}},"id":"8b42a9e3-b58e-4122-95e6-5055bb311dab","type":"PanTool"},{"attributes":{},"id":"6748a9ae-d02a-4829-8bb5-c282fec7d8ca","type":"YearsTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"45b960e4-9390-4638-886a-31f59be03710","type":"AdaptiveTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"dec4dbb3-cb0a-4805-83dc-7111febf5fad","type":"Segment"},{"attributes":{"plot":{"id":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20","subtype":"Figure","type":"Plot"}},"id":"c3a92c40-00b3-4134-92d4-39613cca34ed","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}}},"id":"ea98a59f-094e-4571-9e3d-29dfbeb26113","type":"ColumnDataSource"}],"root_ids":["9cfbe00c-dbea-40df-bc65-6dd888ff8d20"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"000cf60c-531f-41e9-9ce1-d69b3ab042a1","elementid":"1d1a8c03-3bd1-48b9-b760-86a55e70a69a","modelid":"9cfbe00c-dbea-40df-bc65-6dd888ff8d20"}];
                
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
